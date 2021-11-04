# torre-test


# Description

* Job to be done: let contact the correct person through the network
* Know which of my contacts could lead me to meet a specific user according to my network objectives

Scope for this test:
* Page to Search for user by name
* Page to list the skills of the selected user
* when clicking on a particular skill, show a list of people who have that same skill
* and a list of users related to degree of connection

Other caracteristics
* Responsive, mobile first ()
* Use serverless function (vercel) to retrive the data
* url: https://connect.juandavidgf.com

# Plan
1. Investigation: Figure out how the endopoints work and other general information about torre roadmap ...
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
