const express = require('express');
const { getShop, buyCharacter } = require('../service/shop.service');
const shopRouter = express.Router();

shopRouter.get('/', async (_request, response) => {
  response.json(await getShop());
});

shopRouter.get('/buy', async (request, response) => {
  try {
    await buyCharacter(request.headers.token, +request.query.id);
    response.json({
      message: 'Carta comprada com sucesso',
    });
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
});

module.exports = shopRouter;
