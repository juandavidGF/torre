# torre-test

# Plan
1. Investigation: Figure out how the endopoints work and other gernera information
2. Ideation, and estimation
3. Implementation


# endpoints
- GET https://torre.bio/api/bios/$username (gets bio information of $username)
- GET https://torre.co/api/suite/opportunities/$id (gets job information of $id)
- POST https://search.torre.co/opportunities/_search/?[offset=$offset&size=$size&aggregate=$aggregate] and https://search.torre.co/people/_search/?[offset=$offset&size=$size&aggregate=$aggregate] (search for jobs and people in general).


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
