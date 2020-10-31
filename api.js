const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

router.get('/news', function (req, res) {
    const url = `${apiUrl}/top-headlines?country=mx&apiKey=${apiKey}`;
    axios.get(url).then(response => {
        res.send(response.data.articles);
    }).catch(err => {
        res.send('Failure')
        res.end();
    });
    res.end();
});

router.get('/', function(req, res) {
    const url = `${apiUrl}everything?q=bitcoin&sortBy=publishedAt&apiKey=${apiKey}`;
    axios.get(url).then(response => {
      res.render('news', {
        title: 'Noticias',
        noticias: response.data.articles
      });
    }).catch(err => {
      res.send('Failure');
    });
  });

module.exports = router;