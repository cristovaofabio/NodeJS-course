require('dotenv').config();

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient
        .connect(`mongodb+srv://cristovaofabio:${process.env.MONGO_PASSWORD}@cluster0.sio0ccb.mongodb.net/?retryWrites=true&w=majority`)
        .then(client => {
            console.log('Connected!');
            callback(client);
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = mongoConnect;
