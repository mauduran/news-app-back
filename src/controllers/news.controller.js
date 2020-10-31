const axios = require('axios');
require('dotenv').config();

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

class News {
    //Added this endpoint for HW
    getTopHeadlines(req, res) {
        let  country  = req.query.pais || 'mx';

        const url = `${apiUrl}/top-headlines?country=${country}&apiKey=${apiKey}`;

        axios.get(url)
            .then(response => res.json(response.data.articles))
            .catch(err => res.status(404).json('Failure'));
    }


    getAll(req, res) {
        console.log('Query Params: ', req.query.test);
        const url = `${apiUrl}/top-headlines?country=mx&apiKey=${apiKey}`;
        axios.get(url).then(response => {
            res.send(response.data.articles);
        }).catch(err => {
            res.send('Failure')
            res.end();
        });

    }

    getById(req, res) {
        res.send('Traer noticia ' + req.params.noticiaID);
    }
}
module.exports = new News();