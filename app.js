const express = require('express');
const app = express();

const pizzaRoutes = require('./routes/pizza');
const ordersRoutes = require('./routes/orders');

app.use('/pizza', pizzaRoutes);
app.use('/orders', ordersRoutes);

module.exports = app;