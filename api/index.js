const express = require("express")
const app = express()
const axios = require('axios')


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api', (req, res) => {
  const { name } = req.query;
  res.end(`Hello ${name}!`);
})

app.get('/api/username', async (req, res) => {
  const { username } = req.query

  let respuesta = await axios.get(`https://torre.bio/api/bios/${username}`)
  let dat = respuesta.data;

  // let dat = await fetch(`https://torre.bio/api/bios/${username}`, {
  //   method: "GET"
  // }).then(res => res.json())
  // .catch(error => {console.error('Error:', error)})
  // .then(response => response);

  res.status(200).send({
    data: dat
  })
})
// app.get('/api/connections', async (req, res) => {
//   const { username } = req.query

//   let dat = await axios({
//     method: 'get',
//     url: `https://torre.bio/api/people/${username}/connections`,
//   }).then((response) => {
//     return response.json();
//   }).catch((err) => console.log(err))

//   let dat = await fetch(`https://torre.bio/api/people/${username}/connections`, {
//     method: "GET"
//   }).then(res => res.json())
//   .catch(error => {console.error('Error:', error)})
//   .then(response => response);

//   res.status(200).send({
//     data: dat
//   })
// })


// app.post('/api/searchForSkill', async (req, res) => {
//   const { skill } = req.body;

//   let dat = await fetch("https://search.torre.co/people/_search?currency=USD%24&periodicity=hourly&lang=es&size=20&aggregate=false", {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: `{\"skill/role\":{\"text\":\"${skill}\",\"proficiency\":\"proficient\"}}`,
//   }).then(res => res.json())
//   .catch(error => {console.error('Error:', error)})
//   .then(response => response);

//   res.status(200).send({
//     data: dat.results
//   })
// })

app.post('/api/searchJob', async (req, res) => {
  const { search } = req.body;

  let data = {
    name: {
      term: 'juan david granados'
    }
  }

  let dat = await axios.post("https://search.torre.co/people/_search?lang=es&size=10&aggregate=false", data,
    {headers: {'Content-Type': 'application/json'}
  })

  let da = dat.data



  // let dat = await fetch("https://search.torre.co/people/_search?lang=es&size=10&aggregate=false", {
  //   method: "POST",
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(data)    
  // }).then(res => res.json())
  // .catch(error => {console.error('Error:', error)})
  // .then(response => response);

  res.status(200).send({
    data: da.results,
    total: da.total
  })
})


module.exports = app