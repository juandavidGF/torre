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

  let response = await axios.get(`https://torre.bio/api/bios/${username}`,
    {headers: {'Content-Type': 'application/json'}
  });

  response = response.data

  res.status(200).send({
    data: response
  })
})

app.get('/api/connections', async (req, res) => {
  const { username } = req.query

  let response = await axios.get(`https://torre.bio/api/people/${username}/connections`,
    {headers: {'Content-Type': 'application/json'}
  });

  response = response.data

  res.status(200).send({
    data: response
  })
})

app.post('/api/searchForSkill', async (req, res) => {
  const { skill } = req.body;

  body = `{\"skill/role\":{\"text\":\"${skill}\",\"proficiency\":\"proficient\"}}`

  let dat = await axios.post("https://search.torre.co/people/_search?currency=USD%24&periodicity=hourly&lang=es&size=20&aggregate=false", body,
    {headers: {'Content-Type': 'application/json'}
  })

  let data = dat.data

  res.status(200).send({
    data: data.results
  })
})

app.post('/api/searchPerson', async (req, res) => {
  const { search } = req.body;

  let data = {
    name: {
      term: search
    }
  }

  let response = await axios.post("https://search.torre.co/people/_search?lang=es&size=10&aggregate=false", data,
    {headers: {'Content-Type': 'application/json'}
  })

  response = response.data

  res.status(200).send({
    data: response.results,
    total: response.total
  })
})

module.exports = app