const express = require('express');
const app = express();
const authRoutes = require('./auth');
const profileRoutes = require('./profile');

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

module.exports = app;
