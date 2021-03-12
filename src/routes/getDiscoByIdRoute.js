const Router = require('express');
const router = Router();

const Discos = require('../models/disco');

router.get('/:_id', async (req, res) => {
    try {
        const id = req.params._id;
        console.log(id);
        const disco = await Discos.findById(id);
        if (!disco._id) {
            res.status(404).json({ messageError: 'Disc Not Found' })
        } else {
            res.status(200).json(disco);
        }

    } catch (error) {
        res.status(500).json(error.message)
    }

})

module.exports = router;