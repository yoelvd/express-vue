const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const morgan = require('morgan');
var r = require('rethinkdb')
require('dotenv').config()

app.use(morgan('tiny'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));


var connection = null;

app.get('/tecnicos', (req, res) => {
  r.db(process.env.DB).table('tecnicos').run(connection).then(result =>{
    res.json(result._responses[0].r)
  }).catch(err =>{
    console.log('Error:',err)
  })
});

app.get('/clientes', (req, res) => {
  r.db(process.env.DB).table('clientes').run(connection).then(result =>{
    res.json(result._responses[0].r)
  }).catch(err =>{
    console.log('Error:',err)
  })
});

app.get('/productos', (req, res) => {
  r.db(process.env.DB).table('productos').run(connection).then(result =>{
    res.json(result._responses[0].r)
  }).catch(err =>{
    console.log('Error:',err)
  })
});


app.get('/tecnicos/:id', (req, res) => {
  const id = req.params.id;
  r.db(process.env.DB).table('tecnicos').get(id).run(connection).then(result =>{
    //res.send(result._responses[0].r)
    //res.send(result)
    res.send(result)
  }).catch(err =>{
    console.log('Error:',err)
  })
/*   const event = events.find(event => event.id === id);
  res.send(event); */
});

app.get('/', (req, res) => {
  res.send(`It Works on port: ${port}`)
});


// listen on the port
app.listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err)
    return
  }
  r.connect( {host: process.env.DB_HOST, port: process.env.DB_PORT}, function(err, conn) {
    if (err) throw err;
    connection = conn;
    connection.use(process.env.DB)
  })

  console.log('Listening at http://localhost:' + port )
});