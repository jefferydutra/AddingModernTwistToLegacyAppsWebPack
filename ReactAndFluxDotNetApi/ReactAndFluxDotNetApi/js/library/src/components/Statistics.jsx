var React = require('React');
var CharacterStore = require('../stores/CharacterStore');

function getCharacterCount() {
  return CharacterStore.getCharacterCount();
}

var Statistics = React.createClass({
  getInitialState: function() {
    return {
      characterCount: getCharacterCount()
    }
  },

  render: function() {
    return (
      <div>
        <div className='label label-success pull-right'>
          Matching heroes
          <span className="badge">
            {this.state.characterCount}
          </span>
        </div>
      </div>
    );
  }
});

module.exports = Statistics;