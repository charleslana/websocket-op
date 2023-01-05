const characters = require('../data/character.data');
const shop = require('../data/shop.data');
const userCharacters = require('../data/user.character.data');
const { getUserCharacterById } = require('./user.character.service');
const {
  getLoggedUser,
  updateUserGold,
  updateUserBerry,
} = require('./user.service');

const getShop = async () => {
  return shop;
};

const buyCharacter = async (token, id) => {
  const user = await getLoggedUser(token);
  const item = shop.find(i => {
    return i.id === id;
  });
  if (!item) {
    throw new Error('Carta não encontrada');
  }
  if (user.gold < item.gold || user.berry < item.berry) {
    throw new Error('Moeda insuficiente');
  }
  if (await getUserCharacterById(token, item.character.id)) {
    throw new Error('Você já possui está carta');
  }
  const lastId = userCharacters[userCharacters.length - 1].id;
  userCharacters.push({
    id: lastId + 1,
    userId: user.id,
    character: characters.find(c => c.id === item.character.id),
  });
  user.gold -= item.gold;
  user.berry -= item.berry;
  updateUserGold(user.id, user.gold);
  updateUserBerry(user.id, user.berry);
  return item;
};

module.exports = {
  getShop,
  buyCharacter,
};
