var _characters = [
  {
    name: 'Wolverine',
    numberOfComics: 1794,
    numberOfSeries: 436,
    profilePage: 'http://marvel.com/characters/66/wolverine?utm_campaign=apiRef&utm_source=a346c95988e8d81ce986d98fbd99033a'
  },
  {
    name: 'Cyclops',
    numberOfComics: 697,
    numberOfSeries: 214,
    profilePage: 'http://marvel.com/characters/10/cyclops?utm_campaign=apiRef&utm_source=a346c95988e8d81ce986d98fbd99033a'
  }
];

var CharacterStore = {
  getAll: function() {
    return _characters;
  },
  getCharacterCount: function() {
    return _characters.length;
  }

};

module.exports = CharacterStore;