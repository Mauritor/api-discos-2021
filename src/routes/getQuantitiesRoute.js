const express = require('express');
const router = express.Router();

const Discos = require('../models/disco');

router.get('/', async (req, res) => {
    let datosTags = [];
    let qGenres = [];
    try {
        const tags = await Discos.find({}, { "album.genre": 1 });
        tags.forEach(tag => {
            datosTags.push(tag.album[0].genre);
        })
        const datos = datosTags.join(',').split(',');
        const newDatos = new Set(datos);
        const genres = [...newDatos];
        const quanTotal = await Discos.countDocuments();
        for (let tag of genres) {
            const quantByGenre = await Discos.countDocuments({ "album.genre": tag });
            qGenres.push(tag + ': ' + quantByGenre);
        }
        res.json({ message: 'Quantities', all: quanTotal, qGenres })
    } catch (error) {
        res.status(500).json({ message: "Algo salio mal", error })
    }

})


module.exports = router;