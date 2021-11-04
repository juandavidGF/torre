const express = require("express")
const app = express()
const fetch = require("node-fetch")

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api', (req, res) => {
  const { name } = req.query;
  res.end(`Hello ${name}!`);
})

app.get('/api/username', async (req, res) => {
  const { username } = req.query

  let dat = await fetch(`https://torre.bio/api/bios/${username}`, {
    method: "GET"
  }).then(res => res.json())
  .catch(error => {console.error('Error:', error)})
  .then(response => response);

  res.status(200).send({
    data: dat
  })
})

app.post('/api/searchJob', async (req, res) => {
  const { search } = req.body;

  let data = {
    name: {
      term: search
    }
  }

  let dat = await fetch("https://search.torre.co/people/_search?lang=es&size=10&aggregate=false", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)    
  }).then(res => res.json())
  .catch(error => {console.error('Error:', error)})
  .then(response => response);

  res.status(200).send({
    data: dat.results,
    total: dat.total
  })
})


module.exports = app