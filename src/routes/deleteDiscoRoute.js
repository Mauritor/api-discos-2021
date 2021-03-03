const Router = require('express');
const router = Router();

const Discos = require('../models/disco');

router.delete('/:_id', async (req, res) => {
    try {
        const id = req.params._id;
    console.log(id);
    await Discos.findByIdAndDelete(id, () => {
      console.log(id + 'DELETED');
    })
    res.status(200).json({id: id, message: 'DELETED'})
    } catch (error) {
        res.status(500).json(error.message)
    }
})


module.exports = router;