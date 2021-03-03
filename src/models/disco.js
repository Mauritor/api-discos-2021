const { Schema, model } = require('mongoose');

//const genreSchema = new Schema({genreName: String});
const discoSchema = new Schema({
    album: [
        {
            name: {
                type: String,
                required: true,
            },
            year: {
                type: Number,
                required: true
            },
            cover: {
                type: String,
                required: false
            },
            score: {
                type: Number,
                required: false
            },
            genre: Array
        }
    ],
    artist: [
        {
            name: {
                type: String,
                required: true
            },
            country: {
                type: String,
                required: false
            },
            foto: {
                type: String,
                required: false
            }
        }
    ]
})

module.exports = model('disco', discoSchema)