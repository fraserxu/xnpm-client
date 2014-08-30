/** @jsx React.DOM */
'use strict';

var React = require('react');
var CommandList = require('./list');
var CommandStats = require('./stats');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="commandBox">
        <CommandStats />
        <CommandList data={this.props.data} />
      </div>
    );
  }
});
