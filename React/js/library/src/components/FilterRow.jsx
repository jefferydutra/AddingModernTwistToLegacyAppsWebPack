var React = require('React');

var FilterRow = React.createClass({
  render: function() {
    return (
      <div className='row'>
        <div className='row'>
          <div className="col-md-12">
            Filter Row
          </div>
        </div>
        <div className='row'>
          <div className="col-md-3">
            this is still awesome
          </div>
          <div className="col-md-3">
            this is still awesome
          </div>
          <div className="col-md-3">
            this is still awesome
          </div>
          <div className="col-md-3">
            this is still awesome
          </div>
        </div>
      </div>
    );
  }
});

module.exports = FilterRow;