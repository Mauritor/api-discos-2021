const Router = require('express');
const router = Router();

const Discos = require('../models/disco');

router.post('/', async (req, res) => {
    try {
        const artist = req.body.artist[0].name;
        const album = req.body.album[0].name;
        const disco = new Discos(req.body);
        await disco.save()
        res.status(201).json({ message: `CREATED`, artist, album });
    } catch (error) {
        res.status(500).send(error.message);
    }
})


module.exports = router;