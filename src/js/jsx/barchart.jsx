/** @jsx React.DOM */
'use strict';

var React = require('react');
var Chart = require('./chart');
var DataSeries = require('./dataseries');
var _ = require('lodash');

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
    var dates = this.state.data.map(function(data) {
      var date = new Date(data.timestamp)
      return date.getDate()
    })
    dates = _.values(_.countBy(dates, function(date) {return date}))

    return (
      <Chart width={this.props.width} height={this.props.height}>
        <DataSeries data={dates} width={this.props.width} height={this.props.height} color="cornflowerblue" />
      </Chart>
    );
  }
});