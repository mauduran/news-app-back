const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');


const newsController = require('./../src/controllers/news.controller');

router.get('/', (req, res) => res.json('OK'));
router.get('/noticias', newsController.getAll);
router.get('/noticias/:id', newsController.getById);

router.get('/top-headlines', newsController.getTopHeadlines);

router.post('/auth', function (req, res) {
  console.log('Auth: ', req.body);
  res.send('Ok');
});

router.post('/auth2', function (req, res) {
  console.log('Auth2: ', req.body);
  res.send('Ok');
});

module.exports = router;