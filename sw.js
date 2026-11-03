var C = "colophon-v16";
var SHELL = ["./", "index.html", "manifest.webmanifest", "icon.svg", "icon-192.png", "icon-512.png",
  "hunspell.bundle.js", "fonts/roboto-flex.woff2", "dict/it.aff", "dict/it.dic", "dict/en.aff", "dict/en.dic",
  "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(C).then(function (c) { return c.addAll(SHELL); }));
  self.skipWaiting();
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return (k.indexOf("colophon-") === 0 || k.indexOf("epub-") === 0) && k !== C; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
var CACHEABLE = ["cdnjs.cloudflare.com"];
function put(req, r) {
  if (r && r.ok) { var cp = r.clone(); caches.open(C).then(function (c) { c.put(req, cp); }); }
  return r;
}
self.addEventListener("fetch", function (e) {
  var u = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  var own = u.origin === self.location.origin;
  // Ricerche online (Google Books, Open Library) e copertine: sempre dalla rete, mai in cache
  if (!own && CACHEABLE.indexOf(u.hostname) < 0) return;
  // Pagina principale: prima la rete (così una modifica senza aumento di versione si vede comunque), cache solo offline
  if (own && (e.request.mode === "navigate" || u.pathname === "/" || /\/index\.html$/.test(u.pathname))) {
    e.respondWith(fetch(e.request).then(function (r) { return put(e.request, r); }).catch(function () {
      return caches.match(e.request).then(function (h) { return h || caches.match("index.html"); });
    }));
    return;
  }
  e.respondWith(caches.match(e.request).then(function (hit) {
    return hit || fetch(e.request).then(function (r) { return put(e.request, r); });
  }));
});
