// Colophon – service worker.
// La versione della cache viene scritta da build.sh a ogni pubblicazione su Cloudflare
// (impronta dei file dell'app). Se build.sh non gira, vale la versione manuale qui sotto.
var BUILD = "__BUILD__";
var C = "colophon-" + (BUILD.charAt(0) === "_" ? "v19" : BUILD);
var DATA = "colophon-data-1"; // correttore e dizionari: cambiano di rado, restano tra una versione e l'altra

var CORE = ["./", "index.html", "manifest.webmanifest", "icon.svg", "icon-192.png", "icon-512.png",
  "icon-maskable-192.png", "icon-maskable-512.png", "apple-touch-icon.png",
  "shortcut-open.png", "shortcut-privacy.png", "shortcut-lang.png",
  "lib/jszip.min.js", "fonts/roboto-flex.woff2"];
// Indispensabili: senza questi l'installazione fallisce e riparte al prossimo avvio
var ESSENTIAL = ["./", "index.html"];
var LATER = ["hunspell.bundle.js", "dict/it.aff", "dict/it.dic", "dict/en.aff", "dict/en.dic"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(C).then(function (c) {
    // Un file per volta: se uno solo non si scarica, gli altri restano in cache
    function one(u, left) {
      return fetch(new Request(u, { cache: "reload" })).then(function (r) {
        if (!r.ok) throw new Error(u);
        return c.put(u, r);
      }).catch(function (err) {
        if (left > 0) return one(u, left - 1);
        return { failed: u };
      });
    }
    return Promise.all(CORE.map(function (u) { return one(u, 1); })).then(function (res) {
      var bad = res.filter(function (x) { return x && x.failed; }).map(function (x) { return x.failed; });
      if (bad.some(function (u) { return ESSENTIAL.indexOf(u) >= 0; })) throw new Error("precache");
    });
  }));
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) {
      return (k.indexOf("colophon-") === 0 || k.indexOf("epub-") === 0) && k !== C && k !== DATA;
    }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

// Scarica in secondo piano (a richiesta della pagina) ciò che serve solo offline per il correttore
function warm() {
  return caches.open(DATA).then(function (c) {
    return Promise.all(LATER.map(function (u) {
      return c.match(u).then(function (hit) { return hit || c.add(u).catch(function () {}); });
    }));
  });
}
self.addEventListener("message", function (e) {
  if (e.data && e.data.type === "warm") e.waitUntil(warm());
});

function store(req, r) {
  if (r && r.status === 200 && r.type === "basic") {
    var cp = r.clone(), isData = LATER.some(function (u) { return req.url.slice(-u.length) === u; });
    caches.open(isData ? DATA : C).then(function (c) { c.put(req, cp); });
  }
  return r;
}

self.addEventListener("fetch", function (e) {
  var req = e.request, u = new URL(req.url);
  // Solo file dell'app: le ricerche online (Google Books, Open Library) passano sempre dalla rete
  if (req.method !== "GET" || u.origin !== self.location.origin) return;
  // Pagina principale: prima la rete (una modifica si vede subito), la cache solo offline
  if (req.mode === "navigate" || u.pathname === "/" || /\/index\.html$/.test(u.pathname)) {
    e.respondWith(fetch(req).then(function (r) { return store(req, r); }).catch(function () {
      return caches.match(req).then(function (h) { return h || caches.match("index.html"); });
    }));
    return;
  }
  e.respondWith(caches.match(req).then(function (hit) {
    return hit || fetch(req).then(function (r) { return store(req, r); });
  }));
});
