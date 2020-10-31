const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const apiRoutes = require('./routes');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

require('dotenv').config();


const news = require('./news');


const apiNews = require('./api');
const {
  nextTick
} = require('process');

const connectMongo = require('./src/controllers/db.controller');



const app = express();
const port = process.env.PORT || 3000;


app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', 'src/views');

app.use('/assets', express.static(path.join(__dirname, 'public')));

//app.use('/api')


news(app);

//app.use('/api',apiNews);
app.use('/api', jsonParser);

app.use('/api', apiRoutes);

app.get('/airbnb', function (req, res) {
  connectMongo('listingsAndReviews').then(function (collection) {
    collection.find(function (results) {
      res.send(results)
    });

  }).catch(function (err) {
    res.send('ERROR')
  });
});

app.listen(port, () => {
  console.log('App is running in port ' + port);
})