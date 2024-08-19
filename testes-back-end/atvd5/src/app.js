const express = require('express');
const app = express();
const authRoutes = require('./auth');
const productRoutes = require('./products');
const orderRoutes = require('./orders');

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;
