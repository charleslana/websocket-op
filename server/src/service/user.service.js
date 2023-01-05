const users = require('../data/user.data');

const createUser = async (username, password) => {
  if (existLogin(username)) {
    throw new Error('Já existe o login');
  }
  const id = users[users.length - 1].id;
  users.push({
    id: id + 1,
    username: username,
    password: password,
    token: null,
    avatar: '1',
    berry: 500000,
    gold: 500000,
    minExp: 0,
    maxExp: 1000,
    level: 1,
    score: 0,
  });
};

const getUser = async () => {
  const userList = users.map(object => ({ ...object }));
  userList.forEach(u => {
    delete u['password'];
    delete u['token'];
  });
  return userList;
};

const loginUser = async (username, password) => {
  const user = users.find(u => {
    return u.username === username && u.password === password;
  });
  if (!user) {
    throw new Error('Credenciais inválidas');
  }
  const userIndex = users.findIndex(u => u.id == user.id);
  const token = randomString(100);
  users[userIndex].token = token;
  const avatar = user.avatar;
  return { username, token, avatar };
};

const getLoggedUser = async token => {
  const user = users.find(u => {
    return token !== null && token !== '' && u.token === token;
  });
  if (!user) {
    throw new Error('Não autorizado');
  }
  const userLogged = { ...user };
  delete userLogged['password'];
  delete userLogged['token'];
  return userLogged;
};

const existLogin = username => {
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
  createUser,
  getUser,
  loginUser,
  getLoggedUser,
};
