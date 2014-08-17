/** @jsx React.DOM */
'use strict';

var React = require('react');
var BarChart = require('./barchart');

module.exports = React.createClass({
  render: function() {
    return (
      <BarChart width={600} height={300} />
    );
  }
});
