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

async function searchForSkill() {

  let skill = 'javascript'

  body = `{\"skill/role\":{\"text\":\"${skill}\",\"proficiency\":\"proficient\"}}`

  let dat = await axios.post("https://search.torre.co/people/_search?currency=USD%24&periodicity=hourly&lang=es&size=20&aggregate=false", body,
    {headers: {'Content-Type': 'application/json'}
  })

  let data = dat.data
  console.log(data);
}

async function searchForUserName() {

  let username = 'juandavidgf'

  let response = await axios.get(`https://torre.bio/api/bios/${username}`,
    {headers: {'Content-Type': 'application/json'}
  });

  response = response.data

  console.log(response);

  // let dat = await fetch(`https://torre.bio/api/bios/${username}`, {
  //   method: "GET"
  // }).then(res => res.json())
  // .catch(error => {console.error('Error:', error)})
  // .then(response => response);

}


searchForUserName();