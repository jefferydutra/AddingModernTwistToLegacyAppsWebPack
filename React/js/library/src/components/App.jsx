var React = require('React');
var FilterRow = require('./FilterRow.jsx');
var Statistics = require('./Statistics.jsx');
var DataGrid = require('./DataGrid.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div className='container-fluid'>
        <FilterRow />
        <Statistics />
        <DataGrid />
      </div>
    );
  }
});

module.exports = App;