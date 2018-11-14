const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'GET request'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message : 'POST request'
    });
});

router.get('/:pizzaId', (req, res, next) => {
    const id = req.params.pizzaId;
    if (id === 'rica'){
        res.status(200).json({
            message: 'FUCKK',
            id: id
        });
    }else{
        res.status(200).json({
            message: 'Oh oh',
        });
    }
});


router.patch('/:pizzaId', (req, res, next) => {
    res.status(200).json({
        message : 'Receta actualizada'
    });
});

router.delete('/:pizzaId', (req, res, next) => {
    res.status(200).json({
        message : 'Pizza eliminada:('
    });
});

module.exports = router;