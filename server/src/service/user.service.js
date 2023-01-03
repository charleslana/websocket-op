const users = require('../data/user.data');

const userCreate = async (username, password) => {
  if (loginExist(username)) {
    throw new Error('Já existe o login');
  }
  users.push({
    username: username,
    password: password,
    token: null,
  });
};

const userGet = async () => {
  return users;
};

const userLogin = async (username, password) => {};

const loginExist = username => {
  const user = users.find(u => {
    return u.username === username;
  });
  return user;
};

module.exports = {
  userCreate,
  userGet,
  userLogin,
};
