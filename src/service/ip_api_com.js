'use strict'
const axios = require('axios');

const api = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});

function parseResponse (response) {
  if (!response.ok) {
    throw new Error('Erro ao rastrear objeto.')
  }
  return response.arrayBuffer()
  .then(arrayBuffer => iconv.decode(Buffer.from(arrayBuffer), 'iso-8859-1').toString())
  .then(parseAndExtractHTML)
}

function parseAndExtractHTML(bodyString){
  const $ = cheerio.load(bodyString)
  const colunasArray = $('.listEvent')
  .find('tbody')
  .find('tr')
  .toArray();
  const logs =
  colunasArray
  .map(linhas => {
    const data = $(linhas)
    .find('td')
    .toArray()
    .map(
      linha => $(linha).text().replace(/[\t\n\r]/g, '').trim()
    )
    .map(data => data.split(/\s\s+/g))
    return data;
  })
  return extractValues(logs);
}

function extractValues(logs){
  if(!Array.isArray(logs))
    throw new Error('Erro ao extrair eventos do rastreio.')
  const events = [];
  logs.forEach((ev) => {
    const local = ev[0][2].split('/');
    const event = {
      data: ev[0][0],
      dataHora: `${ev[0][0]} ${ev[0][1]}`,
      descricao: ev[1][0],
      cidade: local[0].trim(),
      uf: local[1].trim()
    }
    if(ev[1][1]){
      const destino = ev[1][1].split(' ');
      event.destino = {
        cidade: destino[destino.length - 3],
        uf: destino[destino.length - 1],
      }
    }
    events.push(event);
  })
  return events;
}

function parseError(error) {
  throw new Error(error.message)
}

module.exports = (codigo) =>  {
  const form = new FormData();
  form.append('objetos', codigo);
  return fetch('https://www2.correios.com.br/sistemas/rastreamento/resultado_semcontent.cfm', {
      method: 'POST',
      body: form,
    })
  .then(parseResponse)
  .catch(parseError);
}
