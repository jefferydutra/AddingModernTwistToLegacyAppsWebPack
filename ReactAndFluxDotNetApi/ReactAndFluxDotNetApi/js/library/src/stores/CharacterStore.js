var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CharacterConstants = require('../constants/CharacterConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var _characters = [];

var CharacterStore = assign({}, EventEmitter.prototype, {

  init: function(characters) {
    characters.forEach(function(character) {
      _characters[character.id] = character;
    }, this);
  },

  getAll: function() {
    return _characters;
  },

  getCharacterCount: function() {
    return _characters.length;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
  }

});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch (action.type) {
    case CharacterConstants.ActionTypes.RECEIVE_CHARACTERS:
      CharacterStore.init(action.characters);
      CharacterStore.emitChange();
      break;

  }
});

module.exports = CharacterStore;
