const axios = require('axios');
require('dotenv').config();

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

class News {
    
    getAll(req,res){
        console.log('Query Params: ',req.query.test);
        const url = `${apiUrl}/top-headlines?country=mx&apiKey=${apiKey}`;
        axios.get(url).then(response => {
            res.send(response.data.articles);
        }).catch(err => {
            res.send('Failure')
            res.end();
        });
        
    }

    getById(req,res){
        res.send('Traer noticia ' + req.params.noticiaID);
    }
}
module.exports = new News();