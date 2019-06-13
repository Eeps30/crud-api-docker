require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const dbName = process.env.NODE_ENV === 'dev' ? 'database-test' : 'database'
const MONGO_URL = `mongodb://@ds237267.mlab.com:37267/crud-api-docker`
const options = {
    useNewUrlParser: true,
    auth: {
        user: `${process.env.MONGO_INITDB_ROOT_USERNAME}`,
        password: `${process.env.MONGO_INITDB_ROOT_PASSWORD}`
    }
}
const routes = require('./routes/routes.js');
const port = process.env.PORT || 80
const app = express()
const http = require('http').Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api', routes);
app.use((req, res) => {
    res.status(404);
})

mongoose.connect(MONGO_URL, options, (err, database) => {
    if (err) {
        console.log(`FATAL MONGODB CONNECTION ERROR: ${err}:${err.stack}`)
        process.exit(1)
    }
})

let db = mongoose.connection;

db.once('open', () => {
    console.log("MongoDB Connection Successful");
})

db.on('error', (err) => {
    console.log("MongoDB Connection: " + err)
})

module.exports = app;