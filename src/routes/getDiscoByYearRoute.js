const Router = require('express');
const router = Router();

const Discos = require('../models/disco');

router.get('/:year', async (req, res) => {
    try {
        const year = req.params.year;
        const yearString = year.toString();

        const disco = await Discos.find({ "album.year": yearString }, {"artist.name": 1, "album.name": 1, "album.year": 1});
        if (disco[0] === undefined) {
            res.status(404).json({ message: 'No hay discos con ese año' })
        } else {
            res.status(200).json(disco);
        }

    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;