const express = require('express');
const { getShop } = require('../service/shop.service');
const shopRouter = express.Router();

shopRouter.get('/', async (_request, response) => {
  response.json(await getShop());
});

module.exports = shopRouter;
