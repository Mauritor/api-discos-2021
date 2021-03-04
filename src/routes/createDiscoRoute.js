const Router = require('express');
const router = Router();

const Discos = require('../models/disco');
const { capitalCase } = require('capital-case');

router.post('/', async (req, res) => {
    try {
        const album = req.body.album[0].name;
        const genre = req.body.album[0].genre;
        const year = req.body.album[0].year;
        const cover = req.body.album[0].cover;
        const score = req.body.album[0].score;
        const artist = req.body.artist[0].name;
        const country = req.body.artist[0].country;
        const foto = req.body.artist[0].foto;

        const albumCapitalCase = capitalCase(album);
        const artistCapitalCase = capitalCase(artist);

        discoCapitalCase = {
            album: [{genre, name: albumCapitalCase, year, cover, score}],
            artist: [{name: artistCapitalCase, country, foto}]
        }
        
        const disco = new Discos(discoCapitalCase);
        await disco.save()
        res.status(201).json({ message: `CREATED`, artistCapitalCase, albumCapitalCase });
    } catch (error) {
        res.status(500).send(error.message);
    }
})


module.exports = router;