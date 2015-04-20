var React = require('React');

var filterButtonStyle = {
  marginLeft: '15px'
};

var FilterRow = React.createClass({
  _submitForm: function(e) {
    e.preventDefault(); //Call preventDefault() on the event to prevent the browser's default action of submitting the form.
  },

  render: function() {
    return (
      <div clasName='row'>
        <form className='form-inline'>
          <label>
            <select
              value=''
              className='form-control input-sm'>
              <option value="" disabled selected>Select hero type ..</option>
              <option>Hero</option>
              <option>Villain</option>
              <option>A little bit of both</option>
            </select>
          </label>
          <button
            style={filterButtonStyle}
            className='btn btn-primary'
            onClick={this._submitForm}>
            Filter
          </button>
        </form>
      </div>
    );
  }
});

module.exports = FilterRow;