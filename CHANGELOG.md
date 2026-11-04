# Changelog

[Italiano](#italiano) · [English](#english)

Il formato segue [Keep a Changelog](https://keepachangelog.com/it/1.1.0/) e il versionamento segue [SemVer](https://semver.org/lang/it/).
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and versioning follows [SemVer](https://semver.org/).

---

## Italiano

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
