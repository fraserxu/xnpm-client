/** @jsx React.DOM */
'use strict';

var React = require('react');
var BarChart = require('./barchart');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },
  render: function() {
    return (
      <BarChart width={600} height={300} data={this.state.data} />
    );
  }
});
