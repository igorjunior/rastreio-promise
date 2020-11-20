<p align="center">
  <img src="https://i.imgur.com/tUAhDyr.png" width="250px" height="200px">
</p>

<h1 align="center">Rastreio Promise</h1>

<p align="center">
  Rastreamento de objetos integrado aos serviços dos Correios.
</p>

## Como utilizar


### Realizando uma consulta

``` js
const rastreio = require('./rastreio-promise');

rastreio('OL312467368BR')
  .then(console.log)

  //[
  //  {
  //    data: '13/11/2020',
  //    dataHora: '13/11/2020 15:13',
  //    descricao: 'Objeto entregue ao destinat�rio',
  //    cidade: 'Guapo ',
  //    uf: ' GO'
  //  },
  //  {
  //    data: '13/11/2020',
  //    dataHora: '13/11/2020 15:11',
  //    descricao: 'Objeto saiu para entrega ao destinat�rio',
  //    cidade: 'Guapo ',
  //    uf: ' GO'
  //  },
  //  {
  //    data: '12/11/2020',
  //    dataHora: '12/11/2020 09:30',
  //    descricao: 'Objeto em tr�nsito - por favor aguarde',
  //    cidade: 'APARECIDADEGOIANIA',
  //    uf: 'GO',
  //    destino: { cidade: 'Guapo', uf: 'GO' }
  //  },
  //  {
  //    data: '10/11/2020',
  //    dataHora: '10/11/2020 19:00',
  //    descricao: 'Objeto em tr�nsito - por favor aguarde',
  //    cidade: 'CAJAMAR',
  //    uf: 'SP',
  //    destino: { cidade: 'GOIANIA', uf: 'GO' }
  //  },
  //  {
  //    data: '09/11/2020',
  //    dataHora: '09/11/2020 10:51',
  //    descricao: 'Objeto em tr�nsito - por favor aguarde',
  //    cidade: 'Santos',
  //    uf: 'SP',
  //    destino: { cidade: 'CAJAMAR', uf: 'SP' }
  //  },
  //  {
  //    data: '06/11/2020',
  //    dataHora: '06/11/2020 15:23',
  //    descricao: 'Objeto postado',
  //    cidade: 'Santos ',
  //    uf: ' SP'
  //  }
  //]
```

### Quando o código de rastreio possui um formato inválido

``` js
const rastreio = require('./rastreio-promise');

rastreio('OLs312467368BR')
  .then(console.log)

  //{
  //  error: 'validation_error',
  //  message: 'O código de rastreio deve conter 13 caracteres.'
  //}
```

### Quando o código de rastreio é inválido

``` js
const rastreio = require('./rastreio-promise');

rastreio('OL412467368BR')
  .then(console.log)

  //{
  //  error: 'service_error',
  //  message: 'O serviço não retornou eventos para este código de rastreio.'
  //}
```

### Instalação

#### npm
```
$ npm install --save rastreio-promise
```

#### yarn
```
$ yarn add rastreio-promise
```

## Autor


| [<img src="https://avatars0.githubusercontent.com/u/53293017?v=3&s=115"><br><sub>@igorjunior</sub>](https://github.com/igorjunior) |
| :---: |