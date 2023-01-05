const userCharacters = require('../data/user.character.data');
const { getLoggedUser } = require('./user.service');

const getUserCharacter = async token => {
  const user = await getLoggedUser(token);
  const userCharacter = userCharacters.filter(u => {
    return u.userId === user.id;
  });
  return userCharacter;
};

const getUserCharacterById = async (token, id) => {
  const user = await getLoggedUser(token);
  const userCharacter = userCharacters.find(u => {
    return u.userId === user.id && u.character.id === id;
  });
  return userCharacter;
};

module.exports = {
  getUserCharacter,
  getUserCharacterById,
};
