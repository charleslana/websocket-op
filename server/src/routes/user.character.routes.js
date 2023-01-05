const express = require('express');
const { getUserCharacter } = require('../service/user.character.service');
const userCharacterRouter = express.Router();

userCharacterRouter.get('/', async (request, response) => {
  try {
    response.json(await getUserCharacter(request.headers.token));
  } catch (error) {
    response.status(401).json({
      message: error.message,
    });
  }
});

module.exports = userCharacterRouter;
