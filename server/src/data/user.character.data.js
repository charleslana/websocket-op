const characters = require('./character.data');

const userCharacters = [
  {
    id: 1,
    userId: 1,
    character: characters.find(c => c.id === 1),
  },
  {
    id: 2,
    userId: 1,
    character: characters.find(c => c.id === 2),
  },
  {
    id: 3,
    userId: 1,
    character: characters.find(c => c.id === 3),
  },
  {
    id: 4,
    userId: 1,
    character: characters.find(c => c.id === 4),
  },
];

module.exports = userCharacters;
