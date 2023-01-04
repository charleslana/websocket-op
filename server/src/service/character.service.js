const characters = require('../data/character.data');

const getCharacter = async () => {
  return characters;
};

module.exports = {
  getCharacter,
};
