#!/bin/sh
# Eseguito da Cloudflare Pages prima della pubblicazione (Build command: sh build.sh).
# Scrive in sw.js un'impronta dei file dell'app: la cache cambia da sola solo quando cambia
# davvero qualcosa, senza dover alzare a mano il numero di versione.
set -e
H=$(find . -type f \( -name '*.html' -o -name '*.js' -o -name '*.webmanifest' -o -name '*.png' -o -name '*.svg' -o -name '*.woff2' -o -name '*.aff' -o -name '*.dic' \) \
  ! -name 'sw.js' ! -path './docs/*' ! -path './logo-alternativi/*' ! -path './.git/*' | LC_ALL=C sort | xargs cat | sha256sum | cut -c1-8)
sed -i "s/__BUILD__/$H/" sw.js
echo "Colophon build: $H"
