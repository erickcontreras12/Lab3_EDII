const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message : 'Orden obtenida'
    });
}); 

router.post('/', (req, res, next) =>{
    res.status(201).json({
        message : 'Orden enviada'
    });
}); 

router.get('/:orderId', (req, res, next) =>{
    res.status(200).json({
        message : 'Orden:',
        orderId : req.params.orderId 
    });
}); 

router.delete('/:orderId', (req, res, next) =>{
    res.status(200).json({
        message : 'Orden eliminada',
        orderId : req.params.orderId 
    });
});

module.exports = router;