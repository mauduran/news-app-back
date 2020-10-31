/*exports.getNews = function(){
    console.log('Traer noticias');
}

class Noticias {
    title = "Noticias";
    getNews() {
        console.log('Voy a traer mas '+this.title);
    }
}
module.exports = new Noticias();



 const timestamp = new   Date().getTime();

var saludar = function (){
    console.log('HOLA desde archivo news a las '+timestamp);
}

saludar();


module.exports = saludar; */

const axios = require('axios');

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

require('dotenv').config();



function setNewsEndpoints(app) {
    app.get('/recientes', function(req, res) {
        const url = `${apiUrl}/top-headlines?country=mx&apiKey=${apiKey}`;
        axios.get(url).then(response => {
          res.render('index', {
            noticias: response.data.articles
          });
        }).catch(err => {
          res.send('Failure');
        });
      });
      
      app.get('/', function(req, res) {
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
}

module.exports = setNewsEndpoints;