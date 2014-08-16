/** @jsx React.DOM */
'use strict';

var React = require('react');
var CommandList = require('./list');
var CommandStats = require('./stats');

var shoe = require('shoe');
var stream = shoe('/api');

// data
var _data = [];
stream.on('data', function (data) {
  _data.push(JSON.parse(data));
});

module.exports = React.createClass({
  getInitialState: function() {
    return {data: _data};
  },
  render: function() {
    return (
      <div className="commandBox">
        <h1>NPM command history</h1>
        <CommandStats />
        <CommandList data={this.state.data} />
      </div>
    );
  }
});
