const express = require('express');
const characterRouter = require('./character.routes');
const userRouter = require('./user.routes');

const routes = express.Router();

routes.use('/user', userRouter);
routes.use('/character', characterRouter);

module.exports = routes;
