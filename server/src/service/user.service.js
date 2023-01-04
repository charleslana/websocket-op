const users = require('../data/user.data');

const userCreate = async (username, password) => {
  if (loginExist(username)) {
    throw new Error('Já existe o login');
  }
  const id = users[users.length - 1].id;
  users.push({
    id: id + 1,
    username: username,
    password: password,
    token: null,
  });
};

const userGet = async () => {
  return users;
};

const userLogin = async (username, password) => {
  const user = users.find(u => {
    return u.username === username && u.password === password;
  });
  if (!user) {
    throw new Error('Credenciais inválidas');
  }
  const userIndex = users.findIndex(u => u.id == user.id);
  const token = randomString(10);
  users[userIndex].token = token;
  return { username, token };
};

const loginExist = username => {
  const user = users.find(u => {
    return u.username === username;
  });
  return user;
};

const randomString = length => {
  let string = '';
  let randomChar = function () {
    let number = Math.floor(Math.random() * 62);
    if (number < 10) return number;
    if (number < 36) return String.fromCharCode(number + 55);
    return String.fromCharCode(number + 61);
  };
  while (string.length < length) string += randomChar();
  return string;
};

module.exports = {
  userCreate,
  userGet,
  userLogin,
};
