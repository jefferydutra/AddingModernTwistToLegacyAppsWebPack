var React = require('React');

var CharacterRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.character.name}</td>
        <td>{this.props.character.numberOfComics}</td>
        <td>{this.props.character.numberOfSeries}</td>
        <td>{this.props.character.profilePage}</td>
      </tr>
    );
  }
});

module.exports = CharacterRow;