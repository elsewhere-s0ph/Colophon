<p align="center">
  <img src="docs/icon.png" width="112" alt="Colophon">
</p>

<h1 align="center">Colophon</h1>

<p align="center">
  <b>Editor EPUB gratuito, nel browser, che funziona anche offline.</b><br>
  <b>A free EPUB editor that runs in your browser, even offline.</b>
</p>

<p align="center">
  <a href="https://colophon-home.pages.dev"><b>colophon-home.pages.dev</b></a> · <a href="https://colophon-editor.pages.dev">colophon-editor.pages.dev</a><br>
  <sub>Sito · Website &nbsp;|&nbsp; App</sub><br>
  <a href="https://github.com/elsewhere-s0ph">GitHub · elsewhere-s0ph</a><br>
  <a href="#italiano">Italiano</a> · <a href="#english">English</a>
</p>

<table>
  <tr>
    <td align="center"><img src="docs/screenshots/02-metadati.png" width="200" alt=""><br><sub>Metadati · Metadata</sub></td>
    <td align="center"><img src="docs/screenshots/03-stile-anteprima.png" width="200" alt=""><br><sub>Stile · Style</sub></td>
    <td align="center"><img src="docs/screenshots/05-ortografia.png" width="200" alt=""><br><sub>Ortografia · Spell check</sub></td>
    <td align="center"><img src="docs/screenshots/08-scansione.png" width="200" alt=""><br><sub>Scansioni · Scan cleanup</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="docs/screenshots/09-immagini.png" width="200" alt=""><br><sub>Immagini · Images</sub></td>
    <td align="center"><img src="docs/screenshots/10-riepilogo.png" width="200" alt=""><br><sub>Riepilogo · Summary</sub></td>
    <td align="center"><img src="docs/screenshots/06-indice.png" width="200" alt=""><br><sub>Indice · Contents</sub></td>
    <td align="center"><img src="docs/screenshots/14-titoli.png" width="200" alt=""><br><sub>Titoli · Headings</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="docs/screenshots/11-carattere.png" width="200" alt=""><br><sub>Font incorporato · Embedded font</sub></td>
    <td align="center"><img src="docs/screenshots/13-accessibilita.png" width="200" alt=""><br><sub>Accessibilità · Accessibility check</sub></td>
    <td align="center"><img src="docs/screenshots/15-confronto.png" width="200" alt=""><br><sub>Prima e dopo · Before and after</sub></td>
    <td align="center"><img src="docs/screenshots/16-capitoli.png" width="200" alt=""><br><sub>Capitoli · Chapter editor</sub></td>
  </tr>
</table>

---

## Italiano

**Colophon** è una web app (PWA) per modificare i file **EPUB** direttamente dal browser: metadati, copertina, stile, indice e testo. È pensata come alternativa leggera alle funzioni di modifica di Calibre e funziona su Chromebook, Android, Windows, macOS e Linux. Si può installare come una normale app e, dopo la prima apertura, usare anche senza connessione.

> **Privacy:** i tuoi libri non vengono mai caricati su nessun server. Ogni file viene letto, modificato e salvato sul tuo dispositivo. L'originale non viene mai toccato: il salvataggio crea un nuovo file.

### Come funziona

1. Apri un file EPUB (anche da Google Drive, tramite il selettore file del dispositivo).
2. Modifica i campi e le opzioni che ti servono: le sezioni lasciate vuote non cambiano nulla.
3. Prima di salvare, un **riepilogo** elenca ogni modifica (con numero di occorrenze e risparmio sulle immagini): puoi togliere la spunta a quelle che non vuoi applicare.
4. Salva: scarichi un nuovo EPUB con le modifiche.

Un EPUB è un archivio ZIP di pagine XHTML, immagini e un file di descrizione (OPF). Colophon lo legge nel browser, applica le modifiche ai file interessati e lo ricompone rispettando le regole del formato.

### Caratteristiche

**Metadati e copertina**
- Titolo, autori, serie e numero, editore, lingua, data, tag e descrizione
- Sostituzione della copertina (JPG o PNG)
- **Ricerca online** di titolo, autore e copertina (Google Books, con Open Library come alternativa)
- Rinomina del file con un modello, per esempio `{serie} {numero} - {titolo}`

**Stile e impaginazione**, con anteprima del primo capitolo che si aggiorna in tempo reale
- Margini, interlinea, spazio tra paragrafi, rientro della prima riga, dimensione del testo
- Allineamento, sillabazione, carattere (Serif o Sans serif)
- Capolettera dopo i titoli, titoli centrati o a sinistra
- **Preset di stile** da salvare e riapplicare ad altri libri
- Pulizia dello stile imposto dall'editore (colori, caratteri, dimensioni) o di tutti gli stili
- **Carattere incorporato:** carica un font (TTF, OTF, WOFF, WOFF2; normale, grassetto, corsivo) e lo inserisce nel libro, così appare uguale su tutti i lettori; l'anteprima lo mostra subito

**Pulizia del testo**
- Virgolette caporali «…» o inglesi “…”, apostrofi tipografici
- Tre puntini in …, spazi doppi, spazio prima della punteggiatura, dialoghi con il trattino lungo
- **Cerca, sostituisci ed elimina** in tutto il libro, anche con espressioni regolari, con conteggio delle occorrenze

**Pulizia da scansione (OCR)**, per libri convertiti da PDF o da scansioni
- Unisce le parole spezzate dal trattino a fine riga ("impera-" / "tore") e i paragrafi interrotti a metà frase
- Toglie i numeri di pagina isolati e le intestazioni o i piè di pagina che si ripetono (scegli tu quali)
- **Analizza** mostra cosa verrebbe corretto, senza cambiare nulla

**Controllo ortografico**
- Trova le parole non presenti nel dizionario, in **italiano o inglese** (per esempio errori di scansione come "vImperatore")
- Mostra la frase in cui compaiono e propone una correzione; scegli tu quali applicare a tutto il libro
- Funziona offline (motore Hunspell compilato in WebAssembly) e può ignorare i nomi propri

**EPUB 3 e accessibilità**
- **Aggiornamento a EPUB 3** dei libri in EPUB 2: nuovo indice di navigazione (quello vecchio resta per i lettori datati), codice delle pagine aggiornato, ruoli e ordinamento degli autori convertiti. I libri aggiornati superano la verifica ufficiale di [EPUBCheck](https://www.w3.org/publishing/epubcheck/) senza errori né avvisi
- **Lingua** impostata in ogni pagina
- **Descrizioni delle immagini:** elenca le immagini senza testo alternativo, con anteprima, e permette di scriverlo o di segnarle come decorative
- **Metadati di accessibilità** (schema.org) in base a ciò che l'app riconosce: testo, immagini, indice, ordine di lettura

**Immagini**
- **Ottimizzazione:** ricomprime JPG e PNG (copertina compresa) con larghezza massima e qualità a scelta, mostrando in anticipo il risparmio di spazio

**Struttura del libro**
- **Indice:** rinomina, sposta, cambia livello o elimina le voci; rigenera l'indice dai capitoli
- **Controllo del libro:** segnala file mancanti o non dichiarati, collegamenti e immagini rotti, codice non valido, dati mancanti
- **Statistiche:** capitoli, parole e tempo di lettura stimato
- **Confronto prima e dopo:** capitolo per capitolo, con le differenze evidenziate (rosso = tolto, verde = aggiunto) e la possibilità di vedere solo "prima" o solo "dopo"
- **Editor dei capitoli:** elimina capitoli inutili, cambia l'ordine, unisci o dividi capitoli, correggi il testo a mano; collegamenti e indice vengono aggiornati da soli
- **Titoli e struttura:** trova i titoli scritti come testo semplice (grassetto, maiuscolo, «Capitolo 3») e li trasforma in veri titoli, aggiungendoli anche all'indice
- **Pulizia del codice:** toglie span inutili, tratti di formattazione spezzati, paragrafi vuoti, a capo doppi, commenti e attributi vuoti
- **Controllo dei metadati:** legge il libro e propone correzioni a titolo, autori, lingua e serie (nomi di file usati come titolo, maiuscolo, «Cognome, Nome», più autori nello stesso campo, lingua rilevata dal testo); scegli tu cosa applicare
- **Note a piè di pagina:** controlla i riferimenti, aggiunge i link di ritorno, rinumera le note, toglie i collegamenti rotti e crea note a comparsa per i lettori EPUB 3
- **Controllo di accessibilità:** un rapporto con problemi, avvisi e suggerimenti su descrizioni delle immagini, lingua, titoli, tabelle, collegamenti, contrasto dei colori, indice e metadati di accessibilità, con l'indicazione di come correggere
- **Verifica di validità:** controlla che il file sia costruito correttamente (pacchetto, manifest, ordine di lettura, pagine XML, collegamenti, immagini, indice) e, prima di salvare, avvisa se le modifiche introducono nuovi problemi che potrebbero impedire l'apertura su alcuni lettori. È una verifica semplificata, non sostituisce EPUBCheck
- **Aggiornamenti:** quando pubblichi una nuova versione, l'app mostra un avviso "Aggiorna" senza dover ricaricare più volte.
- **Apri i file dal file manager:** installando Colophon su Chromebook o computer, un doppio clic su un `.epub` lo apre direttamente nell'app (non disponibile su Android)

**Interfaccia**
- **Italiano e inglese:** al primo avvio propone la lingua del dispositivo; si cambia in ogni momento con i pulsanti IT / EN
- **Riepilogo prima del salvataggio:** ogni modifica è elencata e si può escludere singolarmente
- Interfaccia in stile **Material 3 Expressive**: forme morbide e animate, colori tonali generati da un unico colore di base, interruttori, pulsanti a pillola e icone Google Material Symbols incorporate (funzionano offline)
- Tema chiaro e scuro automatico, adatta a telefono, tablet e computer
- Installabile e utilizzabile offline (tranne la ricerca online)

### Limiti noti

- Cerca e sostituisci agisce dentro un singolo blocco di testo: una frase interrotta da un grassetto o da un corsivo non viene trovata.
- Alcune app di lettura (per esempio Kindle o Apple Books) ignorano margini e carattere se l'utente ha impostato i propri.
- La ricerca online richiede connessione e dipende da servizi esterni che possono rifiutare temporaneamente le richieste.
- Il controllo del libro segnala i problemi ma non li corregge.
- Il correttore usa un dizionario, non un'intelligenza artificiale: non conosce nomi propri e termini inventati (vanno ignorati), per impostazione predefinita salta le parole con iniziale maiuscola e non verifica la grammatica.
- Testata su Chrome; su altri browser alcune funzioni potrebbero comportarsi diversamente.

---

## English

**Colophon** is a web app (PWA) to edit **EPUB** files right in your browser: metadata, cover, style, table of contents and text. It is a lightweight alternative to Calibre's editing features and works on Chromebook, Android, Windows, macOS and Linux. It can be installed like a regular app and, after the first visit, used without a connection.

> **Privacy:** your books are never uploaded to any server. Every file is read, edited and saved on your device. The original is never touched: saving creates a new file.

### How it works

1. Open an EPUB file (Google Drive files work too, through your device's file picker).
2. Change the fields and options you need: sections left empty change nothing.
3. Before saving, a **summary** lists every change (with occurrence counts and image savings): untick the ones you don't want to apply.
4. Save: you download a new EPUB with your changes.

An EPUB is a ZIP archive of XHTML pages, images and a description file (OPF). Colophon reads it in the browser, applies your changes to the files involved and repackages it following the format's rules.

### Features

**Metadata and cover**
- Title, authors, series and number, publisher, language, date, tags and description
- Cover replacement (JPG or PNG)
- **Online lookup** of title, author and cover (Google Books, with Open Library as a fallback)
- File renaming with a template, for example `{series} {number} - {title}`

**Style and layout**, with a live preview of the first chapter
- Margins, line height, paragraph spacing, first-line indent, text size
- Alignment, hyphenation, typeface (Serif or Sans serif)
- Drop caps after headings, centered or left-aligned headings
- **Style presets** you can save and reapply to other books
- Removal of publisher-imposed styles (colors, fonts, sizes) or of all styles
- **Embedded font:** load a font (TTF, OTF, WOFF, WOFF2; regular, bold, italic) and embed it in the book so it looks the same on every reader; the preview shows it immediately

**Text cleanup**
- Guillemets «…» or curly quotes “…”, typographic apostrophes
- Three dots to an ellipsis …, double spaces, space before punctuation, dialogue with em dashes
- **Find, replace and delete** across the whole book, with optional regular expressions and occurrence counts

**Scan cleanup (OCR)**, for books converted from PDF or scans
- Joins words split by a hyphen at the end of a line ("impera-" / "tore") and paragraphs interrupted mid-sentence
- Removes stray page numbers and repeated headers or footers (you choose which)
- **Analyze** shows what would be fixed without changing anything

**Spell checker**
- Finds words missing from the dictionary, in **Italian or English** (for example scanning errors such as "vImperatore")
- Shows the sentence where each word appears and suggests a fix; you choose which ones to apply to the whole book
- Works offline (Hunspell compiled to WebAssembly) and can ignore proper names

**EPUB 3 and accessibility**
- **Upgrade to EPUB 3** for EPUB 2 books: new navigation document (the old one is kept for legacy readers), updated page markup, author roles and sort names converted. Upgraded books pass the official [EPUBCheck](https://www.w3.org/publishing/epubcheck/) validation with no errors or warnings
- **Language** set on every page
- **Image descriptions:** lists images without alternative text, with a thumbnail, and lets you write it or mark them as decorative
- **Accessibility metadata** (schema.org) based on what the app detects: text, images, table of contents, reading order

**Images**
- **Optimization:** recompresses JPG and PNG (cover included) with a maximum width and quality of your choice, showing the space saved beforehand

**Book structure**
- **Table of contents:** rename, move, change level or delete entries; regenerate it from the chapters
- **Book check:** reports missing or undeclared files, broken links and images, invalid markup, missing data
- **Statistics:** chapters, words and estimated reading time
- **Before and after comparison:** chapter by chapter, with differences highlighted (red = removed, green = added) and a "before" or "after" only view
- **Chapter editor:** delete unwanted chapters, reorder, merge or split chapters, fix text by hand; links and table of contents are updated automatically
- **Headings and structure:** finds headings written as plain text (bold, uppercase, “Chapter 3”) and turns them into real headings, also adding them to the table of contents
- **Code cleanup:** removes useless spans, split formatting runs, empty paragraphs, double line breaks, comments and empty attributes
- **Metadata check:** reads the book and suggests fixes for title, authors, language and series (file names used as titles, all caps, “Surname, Name”, several authors in one field, language detected from the text); you choose what to apply
- **Footnotes:** checks references, adds links back, renumbers notes, removes broken links and creates pop-up notes for EPUB 3 readers
- **Accessibility check:** a report with problems, warnings and suggestions on image descriptions, language, headings, tables, links, color contrast, table of contents and accessibility metadata, with hints on how to fix them
- **File validity check:** checks that the file is built correctly (package, manifest, reading order, XML pages, links, images, table of contents) and, before saving, warns you if your changes introduce new problems that could stop it opening on some readers. It is a simplified check and does not replace EPUBCheck
- **Updates:** when a new version is published, the app shows an "Update" notice, so no repeated reloads are needed.
- **Open files from your file manager:** once Colophon is installed on a Chromebook or computer, double-clicking an `.epub` opens it straight in the app (not available on Android)

**Interface**
- **Italian and English:** on first launch it proposes your device's language; switch at any time with the IT / EN buttons
- **Summary before saving:** every change is listed and can be excluded individually
- **Material 3 Expressive** interface: soft animated shapes, tonal colors generated from a single seed color, switches, pill buttons and built-in Google Material Symbols icons (work offline)
- Automatic light and dark theme, designed for phones, tablets and desktops
- Installable and usable offline (except online lookup)

### Known limitations

- Find and replace works inside a single block of text: a sentence interrupted by bold or italic markup is not matched.
- Some reading apps (for example Kindle or Apple Books) ignore margins and typeface when the reader has set their own.
- Online lookup needs a connection and relies on external services that may temporarily refuse requests.
- The book check reports problems but does not fix them.
- The spell checker uses a dictionary, not AI: it does not know proper names or invented terms (ignore them), skips capitalized words by default and does not check grammar.
- Tested on Chrome; other browsers may behave differently.

---

## Project / Progetto

A static site: no build step, no backend. / Un sito statico: nessuna compilazione, nessun server.

| File | |
|---|---|
| `index.html` | The whole app (HTML, CSS, JavaScript) / L'app completa |
| `manifest.webmanifest`, `sw.js` | Installation and offline cache / Installazione e cache offline |
| `icon.svg`, `icon-192.png`, `icon-512.png` | Icons / Icone |
| `hunspell.bundle.js`, `dict/` | Spell checker engine and dictionaries / Motore e dizionari del correttore |

**Libraries / Librerie:** [JSZip](https://stuk.github.io/jszip/) (read and write EPUB archives), [hunspell-asm](https://github.com/kwonoj/hunspell-asm) (MIT), Italian dictionary from [wooorm/dictionaries](https://github.com/wooorm/dictionaries) (GPL-3.0) and English dictionary (MIT and BSD). Font: [Roboto Flex](https://github.com/googlefonts/roboto-flex) (SIL OFL 1.1). Icons: [Material Symbols](https://fonts.google.com/icons) by Google (Apache 2.0). License texts are in `dict/` and `fonts/`.

**Privacy:** Colophon works on your device; books are never uploaded. See / Vedi [PRIVACY.md](PRIVACY.md).

**Licenza / License:** [MIT](LICENSE) © 2026 s0ph. Dizionari, font e librerie di terze parti mantengono le proprie licenze · Third-party dictionaries, fonts and libraries keep their own licenses.
