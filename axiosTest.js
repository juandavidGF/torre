const axios = require('axios');
//const fetch = require('node-fetch')

async function makeGetRequest() {
  let username = 'juandavidgf'
  let res = await axios.get(`https://torre.bio/api/bios/${username}`)
  let data = res.data;
  console.log('axios',data);
  console.log('dat', dat);
}

async function searchForPeople() {
  let data = {
    name: {
      term: 'juan david granados'
    }
  }

  let dat = await axios.post("https://search.torre.co/people/_search?lang=es&size=10&aggregate=false", data,
    {headers: {'Content-Type': 'application/json'}
  })

  let da = dat.data
  console.log(da);

}


searchForPeople();