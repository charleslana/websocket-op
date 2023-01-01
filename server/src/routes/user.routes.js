const express = require('express');
const users = require('../data/user.data');
const userRouter = express.Router();

userRouter.post('/', (request, response) => {
  if (loginExist(request.body.username)) {
    throw new Error('Já existe o login');
  }
  users.push({
    username: request.body.username,
    password: request.body.password,
    token: null,
  });
  response.json({
    message: 'Usuário cadastrado com sucesso',
  });
});

userRouter.get('/', (_request, response) => {
  response.json(users);
});

userRouter.post('/login', (request, response) => {
  users.push({
    username: request.body.username,
    password: request.body.password,
  });
  response.json('ok');
});

module.exports = userRouter;

function loginExist(username) {
  const user = users.find(u => {
    return u.username === username;
  });
  return user;
}
