const Router = require('express');
const router = Router();

const Discos = require('../models/disco');

router.put('/:_id', async (req, res) => {
    try {const id = req.params._id;
        const disco = req.body;
        await Discos.findByIdAndUpdate(id, disco, (err, record) => {
            if (err) {
                res.json(err)
            }else{
                res.json({ message: 'Editado', disco })
            }
         })
    } catch (error) {
        res.status(500).json({message: "Algo salio mal", error})
    }
})

module.exports = router;