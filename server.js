const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const morgan = require('morgan');
var r = require('rethinkdb')

app.use(morgan('tiny'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

var connection = null;
let events = 
[
  {
    id: 1,
    name: 'Charity Ball',
    category: 'Fundraising',
    description: 'Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.',
    featuredImage: 'https://placekitten.com/500/500',
    images: [
      'https://placekitten.com/500/500',
      'https://placekitten.com/500/500',
      'https://placekitten.com/500/500',
    ],
    location: '1234 Fancy Ave',
    date: '12-25-2019',
    time: '11:30'
  },
  {
    id: 2,
    name: 'Rescue Center Goods Drive',
    category: 'Adoptions',
    description: 'Come to our donation drive to help us replenish our stock of pet food, toys, bedding, etc. We will have live bands, games, food trucks, and much more.',
    featuredImage: 'https://placekitten.com/500/500',
    images: [
      'https://placekitten.com/500/500'
    ],
    location: '1234 Dog Alley',
    date: '11-21-2019',
    time: '12:00'
  }
];

app.get('/events', (req, res) => {
  r.db('test').table('posts').run(connection).then(result =>{
    res.json(result._responses[0].r)
  }).catch(err =>{
    console.log('Error:',err)
  })
  //res.send(events);
});

app.get('/events/:id', (req, res) => {
  const id = req.params.id;
  r.db('test').table('posts').get(id).run(connection).then(result =>{
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
  r.connect( {host: '10.0.0.160', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;
  })

  console.log('Listening at http://localhost:'+port)
});