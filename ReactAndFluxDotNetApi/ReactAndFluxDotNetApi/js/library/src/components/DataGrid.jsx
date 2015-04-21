var React = require('React');
var CharacterStore = require('../stores/CharacterStore');
var CharacterRow = require('./CharacterRow.jsx');

function getCharacters() {
  return CharacterStore.getAll();
}

function toCharacterRow(character) {
  return <CharacterRow key={character.name} character={character}/>
}

var DataGrid = React.createClass({
  getInitialState: function() {
    return {
      characters: getCharacters()
    }
  },

  componentWillUnmount: function() {
    CharacterStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    CharacterStore.removeChangeListener(this._onChange)
  },

  _onChange: function() {
    this.setState({characters: getCharacters()});
  },

  render: function() {
    var characterRows = this.state.characters.map(toCharacterRow);
    return (
      <table className='table table-striped'>
        <thead>
        <tr>
          <td>Name</td>
          <td># of Comics</td>
          <td># of Series</td>
          <td>Profile Page</td>
        </tr>
        </thead>
        <tbody>
        {characterRows}
        </tbody>
      </table>
    );
  }
});

module.exports = DataGrid;