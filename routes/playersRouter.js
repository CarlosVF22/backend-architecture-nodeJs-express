const express = require('express');

const PlayersService = require('../services/playersService')

const router = express.Router();
const service = new PlayersService();

//endpoints
router.get('/', async (req, res)=>{
    const players = await service.find();
    res.json(players);
});

// recibir parametro por identificador
router.get('/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const player = await service.findOne(id);
        res.json(player);
    } catch(error){
        res.status(404).json({
            message: error.message
        });
    }
});

router.post('/', (req,res) => {
    const body = req.body;
    res.status(201).json({
        message: 'created',
        data: body
    })
});

module.exports = router;
