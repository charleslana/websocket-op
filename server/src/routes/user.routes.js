const express = require('express');
const { userCreate, userGet, userLogin } = require('../service/user.service');
const userRouter = express.Router();

userRouter.post('/', async (request, response) => {
  try {
    await userCreate(request.body.username, request.body.password);
    response.json({
      message: 'Usuário cadastrado com sucesso',
    });
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
});

userRouter.get('/', async (_request, response) => {
  response.json(await userGet());
});

userRouter.post('/login', async (request, response) => {
  try {
    const token = await userLogin(request.body.username, request.body.password);
    response.json({
      message: 'Usuário logado com sucesso',
      token: token,
    });
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
});

module.exports = userRouter;
