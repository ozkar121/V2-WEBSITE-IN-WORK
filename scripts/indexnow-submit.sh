#!/usr/bin/env bash
# Notifica a IndexNow (Bing, Yandex, DuckDuckGo, Seznam, Naver) todas las URLs
# del sitemap. Requisito: el archivo de clave debe estar publicado en
# https://numen-aviation.com/06ae56dbc040426b9e204a980097f4cd.txt
#
# Uso:  bash scripts/indexnow-submit.sh
set -euo pipefail
cd "$(dirname "$0")/.."

# Regenera el payload desde el sitemap actual (por si añadiste URLs).
python3 - <<'PY'
import re, json
urls = re.findall(r'https://numen-aviation\.com[^<]*', open('public/sitemap.xml').read())
json.dump({
  "host": "numen-aviation.com",
  "key": "06ae56dbc040426b9e204a980097f4cd",
  "keyLocation": "https://numen-aviation.com/06ae56dbc040426b9e204a980097f4cd.txt",
  "urlList": urls,
}, open('scripts/indexnow-payload.json','w'), indent=2, ensure_ascii=False)
print(f"{len(urls)} URLs listas para enviar.")
PY

echo "Enviando a IndexNow..."
curl -sS -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  --data @scripts/indexnow-payload.json \
  -w "\nHTTP %{http_code}\n"
echo "Listo. HTTP 200 o 202 = aceptado."
