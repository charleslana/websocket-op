const express = require('express');
const userRouter = require('./user.routes');

const routes = express.Router();

routes.use('/user', userRouter);

module.exports = routes;
