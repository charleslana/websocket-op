const express = require('express');
const { characterGet } = require('../service/character.service');
const characterRouter = express.Router();

characterRouter.get('/', async (_request, response) => {
  response.json(await characterGet());
});

module.exports = characterRouter;
