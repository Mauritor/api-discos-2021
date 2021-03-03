const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./database');
const app = express();

//MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//IMP ROUTES
const main = require('./routes/mainRoute');
const getDiscos = require('./routes/getDiscosRoute');
const createDisco = require('./routes/createDiscoRoute');
const getDiscoByArtist = require('./routes/getDiscoByArtistRoute');
const getDiscoByYear = require('./routes/getDiscoByYearRoute')
const deleteDisco = require('./routes/deleteDiscoRoute');
const updateDiscoOne = require('./routes/updateDiscoOneRoute');
const updateDiscoAll = require('./routes/updateDiscoAllRoute');

//ROUTES
app.use('/', main);
app.use('/api/discos', getDiscos);
app.use('/api/discos', createDisco);
app.use('/api/discos/artist', getDiscoByArtist);
app.use('/api/discos/year', getDiscoByYear)
app.use('/api/discos/delete', deleteDisco);
app.use('/api/discos/update', updateDiscoOne);
app.use('/api/discos/update', updateDiscoAll);

app.set('PORT', process.env.PORT || 3001);
app.listen(app.get('PORT'), () => { 
    console.log('Server on port:', app.get('PORT'));
})