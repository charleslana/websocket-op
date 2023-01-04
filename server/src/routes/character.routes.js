const express = require('express');
const { getCharacter } = require('../service/character.service');
const characterRouter = express.Router();

characterRouter.get('/', async (_request, response) => {
  response.json(await getCharacter());
});

module.exports = characterRouter;
