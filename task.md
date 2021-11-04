# TODO
* Add loading
* enter to search
* improve images widht in matched people for skills section

# DOING
* retrive a list of conections given a user

# DONE
* search a specific people for name search (curl)
* understand how to work other endpoints
* consume basic data since frontend via serverless function
* Search for a user name and show a list of results
* Configurate tailwindcss
* Create a route to skill list of especific user
* next of pick someoune, list the skills of the user
* Impove the UI 
* show basic important information related with it section
* search for skills
* Add results to new user section


# Interesting topics to develop
* Mesure the capacity of the users not only based in experience
* Aling the objetives of the person with the suggestions, for example the conections
* update favicon


+ conections of a spcific user
"https://torre.bio/api/people/$username/connections"

+ match betwen job opportunities and person
https://torre.co/api/suite/opportunities/jw02bVVr/candidates-ranking/matched/18692

+ retrive a specific oportunity ...
https://torre.co/api/suite/opportunities/$id


+ person
https://torre.bio/api/bios/$username

+ Search for a name

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


+ Search for skill

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

  + Search job opportunities

  curl 'https://search.torre.co/opportunities/_search?currency=USD%24&periodicity=monthly&lang=es&size=0&aggregate=true' \
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
  --data-raw '{"and":[{"bestfor":{"username":"juandavidgf"}},{"remote":{"term":true}},{"compensation":{"amount":3000,"currency":"USD$","periodicity":"monthly","scope":"with-compensation-only"}},{"skill/role":{"text":"fronted developer","proficiency":"proficient"}}]}' \
  --compressed