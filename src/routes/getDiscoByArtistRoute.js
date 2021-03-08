const Router = require('express');
const router = Router();

const Discos = require('../models/disco');
const { capitalCase } = require('capital-case');

router.get('/:artist', async (req, res) => {
    try {
        const band = req.params.artist;
        const artist = capitalCase(band);
        const disco = await Discos.find({ "artist.name": artist }, {"album.name": 1, "album.year": 1, "album.score": 1}, {sort:{"album.score": -1}});
        if (disco[0] === undefined) {
            res.status(404).json({ messageError: 'Artist Not Found' })
        } else {
            res.status(200).json(disco);
        }

    } catch (error) {
        res.status(500).json(error.message)
    }





})

module.exports = router;