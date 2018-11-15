const express = require('express');
const router = express.Router();

var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'prueba' }, 'va');


router.get('/', (req, res, next) =>{
    res.send('El token es: ' + token)
});

module.exports = router;