/*

Db controller
    /all => Noticia.getAll

News Controller
db('noticias').
               getAll
               getByid
               Crear
               actualizar


Usuarios Controller
db('usuario').
              getAll
              getByid
              Crear
              actualizar

Modelo        ****Mas convencional
    DB
    Noticia
        .getAll
        .getByid           
    M/C
    M - DB
    C - M-tx-V
    V - {}
        
Middleware
    req.body,req.params,req.query...
    req.database.find('Noticias)
*/
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const url = process.env.DB_HOST;

/* MongoClient.connect(url, {
    useUnifiedTopology: true
}, function (err, client) {

    console.log("Connected succesfully to server", err);

    const db = client.db();

    const collection = db.collection('listingsAndReviews');

    collection.find({
            property_type: "House"
        })
        .limit(10)
        .toArray((err, results) => {
            console.log('Properties: ', results);
            client.close();
        })

}) */

function connectMongo(collectionName) {

    return new Promise(function (resolve, reject) {
        MongoClient.connect(url, {
            useUnifiedTopology: true
        }, function (err, client) {
            if (err == null) {
                const db = client.db();
                const collection = db.collection(collectionName);
                resolve({
                    find: function(callback){
                        collection.find().limit(10).toArray((err,results) =>{
                            callback(results);
                            client.close();
                        })
                    },

                    //findByid: ...
                });
            } else {
                reject(err);
            }
        });

    });


}


module.exports = connectMongo;