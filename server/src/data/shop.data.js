const characters = require('./character.data');

const shop = [
  {
    id: 1,
    character: characters.find(c => c.id === 1),
    berry: 10000,
    gold: 0,
  },
  {
    id: 2,
    character: characters.find(c => c.id === 2),
    berry: 10000,
    gold: 0,
  },
  {
    id: 3,
    character: characters.find(c => c.id === 3),
    berry: 10000,
    gold: 0,
  },
  {
    id: 4,
    character: characters.find(c => c.id === 4),
    berry: 10000,
    gold: 0,
  },
  {
    id: 5,
    character: characters.find(c => c.id === 5),
    berry: 25000,
    gold: 10000,
  },
  {
    id: 6,
    character: characters.find(c => c.id === 6),
    berry: 25000,
    gold: 1000,
  },
  {
    id: 7,
    character: characters.find(c => c.id === 7),
    berry: 2500000,
    gold: 2000000,
  },
];

module.exports = shop;
