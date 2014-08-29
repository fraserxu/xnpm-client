/** @jsx React.DOM */
'use strict';

var React = require('react');
var Chart = require('./chart');
var DataSeries = require('./dataseries');

module.exports = React.createClass({
  render: function() {
    return (
      <Chart width={this.props.width} height={this.props.height}>
        <DataSeries data={this.props.data} width={this.props.width} height={this.props.height} color="cornflowerblue" />
      </Chart>
    );
  }
});