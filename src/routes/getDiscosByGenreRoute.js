const Router = require('express');
const router = Router();

const Discos = require('../models/disco');

router.get('/:genre', async (req, res) => {
    genreParams = req.params.genre;
    const discos = await Discos.find(
        { "album.genre": genreParams },
        { "artist.name": 1, "album.name": 1, "album.genre": 1 }
    )
    res.json({ message: discos })
})

module.exports = router;