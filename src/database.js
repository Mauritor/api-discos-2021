const mongoose = require('mongoose');
require('colors');

const USER = process.env.USER;
const PASS = process.env.PASS;
const DB = process.env.DB; 
const uri = `mongodb+srv://${USER}:${PASS}@cluster0-ghrs9.mongodb.net/${DB}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(db => console.log('<<< DB is Conected >>>'.blue))
    .catch(err => console.log(err))

