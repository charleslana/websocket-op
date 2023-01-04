const characters = require('../data/character.data');

const characterGet = async () => {
  return characters;
};

module.exports = {
  characterGet,
};
