const https = require('https');
const axios = require('axios');

const api = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});

const a = async () =>{
  console.log(await api.get('http://ip-api.com/json/2804:406c:d015:ba00:ad13:e0e3:616:7344?fields=16406'));
}
a();
