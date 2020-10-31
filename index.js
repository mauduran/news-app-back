const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const apiRoutes = require('./routes');
const bodyParser = require('body-parser');


require('dotenv').config();

// const connectMongo = require('./src/controllers/db.controller');


const app = express();
const port = process.env.PORT || 3000;


app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', 'src/views');

app.use('/assets', express.static(path.join(__dirname, 'public')));

app.use('/api', bodyParser.json());

app.use('/api', apiRoutes);

// app.get('/airbnb', function (req, res) {
//   connectMongo('listingsAndReviews').then(function (collection) {
//     collection.find(function (results) {
//       res.send(results)
//     });

//   }).catch(function (err) {
//     res.send('ERROR')
//   });
// });

app.listen(port, () => {
  console.log('App is running in port ' + port);
})