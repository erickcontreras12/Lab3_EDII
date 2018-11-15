const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Conexion a la base de datos
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/pruebapizza';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

const pizzaRoutes = require('./routes/pizza');
const ordersRoutes = require('./routes/orders');

app.use('/pizza', pizzaRoutes);
app.use('/orders', ordersRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status(404);
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
})

module.exports = app;