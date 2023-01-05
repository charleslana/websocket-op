const express = require('express');
const {
  createUser,
  getUser,
  loginUser,
  getLoggedUser,
  getUserByProperty,
} = require('../service/user.service');
const userRouter = express.Router();

userRouter.post('/', async (request, response) => {
  try {
    await createUser(
      request.body.username,
      request.body.password,
      request.body.passwordConfirmation
    );
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
  response.json(await getUser());
});

userRouter.post('/login', async (request, response) => {
  try {
    const { username, token, avatar } = await loginUser(
      request.body.username,
      request.body.password
    );
    response.json({
      message: 'Usuário logado com sucesso',
      token: token,
      username: username,
      avatar: avatar,
    });
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
});

userRouter.get('/details', async (request, response) => {
  try {
    const user = await getLoggedUser(request.headers.token);
    response.json(user);
  } catch (error) {
    response.status(401).json({
      message: error.message,
    });
  }
});

userRouter.get('/ranking', async (request, response) => {
  response.json(await getUserByProperty(request.query.property));
});

module.exports = userRouter;
