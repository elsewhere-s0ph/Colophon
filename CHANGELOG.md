# Changelog

[Italiano](#italiano) · [English](#english)

Il formato segue [Keep a Changelog](https://keepachangelog.com/it/1.1.0/) e il versionamento segue [SemVer](https://semver.org/lang/it/).
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and versioning follows [SemVer](https://semver.org/).

---

## Italiano

### [1.1.1] – 2026-11-06

#### Aggiunto
- Scorciatoie dell'app installata (tasto destro sull'icona): «Apri un EPUB», «Privacy e condizioni», «Lingua»
- Screenshot a schermo largo (1280×720) per la finestra di installazione su computer
- `sitemap.xml` e dati strutturati (WebApplication) per i motori di ricerca

#### Modificato
- Colophon ora può essere indicizzato dai motori di ricerca: rimossi `noindex` e `X-Robots-Tag`, aggiunto il link canonico, `robots.txt` indica la sitemap
- Service worker: ogni file dell'installazione viene scaricato separatamente (con un secondo tentativo); se ne manca uno secondario l'app si installa comunque
- HSTS a 2 anni (`max-age=63072000`) con `includeSubDomains`
- Immagine di anteprima (`og-image.png`) alleggerita da 314 KB a 45 KB

### [1.1.0] – 2026-11-06

#### Aggiunto
- Verifica di validità del file EPUB: pacchetto, manifest, ordine di lettura, pagine XML ben formate, identificatori duplicati, collegamenti e immagini mancanti, indice (NCX o nav), fogli di stile, risorse remote
- Controllo automatico sul file generato prima di salvare: se compaiono nuovi problemi che potrebbero impedire l'apertura su alcuni lettori, l'app chiede conferma
- Il risultato della verifica compare nel messaggio di salvataggio

### [1.0.1] – 2026-11-05

#### Aggiunto
- Licenza MIT (`LICENSE`)
- Apertura dei file `.epub` dal file manager con l'app installata (Chromebook e computer)
- Intestazioni di sicurezza (`_headers`): CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`
- Manifest più completo: descrizione, id, categorie, screenshot, icone «maskable» separate
- Descrizione, anteprima di condivisione (Open Graph) che punta alla landing, `robots.txt`
- Versione della cache scritta in automatico a ogni pubblicazione (`build.sh`)

#### Modificato
- La PWA non viene indicizzata dai motori di ricerca (`noindex`): resta indicizzabile solo la landing
- Service worker più robusto: l'installazione non dipende più da servizi esterni
- JSZip incluso nell'app (`lib/`), nessun file caricato da cdnjs
- Correttore e dizionari scaricati in secondo piano dopo il primo avvio, non all'installazione

### [1.0.0] – 2026-11-04

Prima versione stabile. Editor EPUB gratuito che funziona nel browser e anche offline: i libri non vengono mai caricati su un server.

#### Funzioni
- Metadati e copertina, con ricerca online (Google Books, Open Library)
- Stile e impaginazione, preset di stile, pulizia del testo e dello stile del libro
- Cerca, sostituisci ed elimina in tutto il libro
- Controllo ortografico italiano e inglese, offline
- Pulizia da scansione (OCR) e ottimizzazione delle immagini
- Font incorporato
- Aggiornamento a EPUB 3, lingua nelle pagine, metadati di accessibilità e descrizioni delle immagini
- Controllo di accessibilità con rapporto di problemi, avvisi e suggerimenti
- Indice, titoli e struttura, pulizia del codice, note a piè di pagina
- Controllo dei metadati, controllo del libro e statistiche
- Confronto prima e dopo
- Editor dei capitoli: elimina, riordina, unisci, dividi e modifica
- Riepilogo prima di salvare, con modifiche escludibili una per una
- Interfaccia in italiano e inglese, con scelta della lingua al primo avvio

#### App
- Installabile come PWA, con avviso «Nuova versione disponibile: Aggiorna»
- Font incorporato: nessuna richiesta a Google Fonts
- Informativa privacy e condizioni d'uso nell'app e in `PRIVACY.md`
- Grafica Material 3 Expressive, tema chiaro e scuro, icone Material Symbols
- Pubblicazione automatica su Cloudflare Pages da questa repo

#### Verifiche
- I libri aggiornati a EPUB 3 superano EPUBCheck senza errori né avvisi

---

## English

### [1.1.1] – 2026-11-06

#### Added
- Installed-app shortcuts (right-click the icon): "Open an EPUB", "Privacy and terms", "Language"
- Wide screenshots (1280×720) for the desktop install dialog
- `sitemap.xml` and structured data (WebApplication) for search engines

#### Changed
- Colophon can now be indexed by search engines: `noindex` and `X-Robots-Tag` removed, canonical link added, `robots.txt` points to the sitemap
- Service worker: each install file is fetched separately (with one retry); if a non-essential file is missing the app still installs
- HSTS set to 2 years (`max-age=63072000`) with `includeSubDomains`
- Sharing preview image (`og-image.png`) reduced from 314 KB to 45 KB

### [1.1.0] – 2026-11-06

#### Added
- EPUB file validity check: package, manifest, reading order, well-formed XML pages, duplicate identifiers, missing links and images, table of contents (NCX or nav), style sheets, remote resources
- Automatic check on the generated file before saving: if new problems appear that could stop it opening on some readers, the app asks for confirmation
- The check result appears in the save message

### [1.0.1] – 2026-11-05

#### Added
- MIT license (`LICENSE`)
- Opening `.epub` files from the file manager with the installed app (Chromebook and desktop)
- Security headers (`_headers`): CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`
- Richer manifest: description, id, categories, screenshots, separate maskable icons
- Description, sharing preview (Open Graph) pointing to the landing page, `robots.txt`
- Cache version written automatically on every publish (`build.sh`)

#### Changed
- The PWA is not indexed by search engines (`noindex`): only the landing page stays indexable
- More robust service worker: installation no longer depends on external services
- JSZip bundled with the app (`lib/`), nothing loaded from cdnjs
- Spell checker and dictionaries downloaded in the background after first launch, not at install time

### [1.0.0] – 2026-11-04

First stable release. A free EPUB editor that runs in the browser and also works offline: your books are never uploaded to a server.

#### Features
- Metadata and cover, with online lookup (Google Books, Open Library)
- Style and layout, style presets, text cleanup and book style cleanup
- Find, replace and delete across the whole book
- Italian and English spell check, offline
- Scan cleanup (OCR) and image optimization
- Embedded font
- Upgrade to EPUB 3, language on every page, accessibility metadata and image descriptions
- Accessibility check with a report of problems, warnings and suggestions
- Table of contents, headings and structure, code cleanup, footnotes
- Metadata check, book check and statistics
- Before and after comparison
- Chapter editor: delete, reorder, merge, split and edit
- Summary before saving, with changes you can untick one by one
- Italian and English interface, with language choice on first launch

#### App
- Installable as a PWA, with a "New version available: Update" notice
- Embedded font: no requests to Google Fonts
- Privacy notice and terms of use in the app and in `PRIVACY.md`
- Material 3 Expressive design, light and dark theme, Material Symbols icons
- Automatic publishing to Cloudflare Pages from this repo

#### Checks
- Books upgraded to EPUB 3 pass EPUBCheck with no errors or warnings
