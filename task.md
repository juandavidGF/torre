# TODO
* understand how to work other endpoints

# DOING

# DONE
* Retrive a person skills given for user name (https://torre.bio/api/bios/juandavidgf)
* search a specific people for name search



+ Buscar por nombre 


 curl 'https://search.torre.co/people/_search?lang=en&size=20&aggregate=false' \
     -H 'content-type: application/json;charset=UTF-8' \
     -    --data-raw '{"name":{"term":"carlos"}}' \
    --compressed

curl 'https://search.torre.co/people/_search?lang=en&size=20&aggregate=false' \
  -H 'authority: search.torre.co' \
  -H 'sec-ch-ua: "Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"' \
  -H 'accept: application/json, text/plain, /' \
  -H 'x-torre-subject: 924114' \
  -H 'content-type: application/json;charset=UTF-8' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'origin: https://torre.co' \
  -H 'sec-fetch-site: same-site' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-dest: empty' \
  -H 'referer: https://torre.co/' \
  -H 'accept-language: en-US,en;q=0.9' \
  --data-raw '{"name":{"term":"carlos"}}' \
  --compressed


+ buscar por habilidad


curl 'https://search.torre.co/people/_search?currency=USD%24&periodicity=hourly&lang=es&size=20&aggregate=false' \
  -H 'authority: search.torre.co' \
  -H 'pragma: no-cache' \
  -H 'cache-control: no-cache' \
  -H 'sec-ch-ua: "Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'x-torre-subject: 18692' \
  -H 'content-type: application/json' \
  -H 'sec-ch-ua-mobile: ?1' \
  -H 'user-agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Mobile Safari/537.36' \
  -H 'sec-ch-ua-platform: "Android"' \
  -H 'origin: https://torre.co' \
  -H 'sec-fetch-site: same-site' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-dest: empty' \
  -H 'referer: https://torre.co/' \
  -H 'accept-language: es-US,es-419;q=0.9,es;q=0.8,en;q=0.7' \
  --data-raw '{"and":[{"skill/role":{"text":"javascript","proficiency":"proficient"}},{"language":{"term":"Español","fluency":"conversational"}},{"language":{"term":"Español","fluency":"conversational"}}]}' \
  --compressed