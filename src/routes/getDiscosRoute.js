const Router = require('express');
const router = Router();

const Discos = require('../models/disco');

router.get('/', async (req, res) => {
    try {
        const discos = await Discos.find();
        res.status(200).json({ data: discos }); 
    } catch (error) {
        res.status(500).send(error.message);
    }
})


module.exports = router;