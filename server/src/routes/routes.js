const express = require('express');
const characterRouter = require('./character.routes');
const userCharacterRouter = require('./user.character.routes');
const userRouter = require('./user.routes');

const routes = express.Router();

routes.use('/user', userRouter);
routes.use('/character', characterRouter);
routes.use('/user/character', userCharacterRouter);

module.exports = routes;
