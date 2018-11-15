const express = require('express');
const app = express();

const jwtRoutes = require('./routes/key');

app.use('/key', jwtRoutes);

module.exports = app;