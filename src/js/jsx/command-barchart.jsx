/** @jsx React.DOM */
'use strict';

var React = require('react');
var Chart = require('./command-chart');
var DataSeries = require('./command-dataseries');
var _ = require('lodash');

module.exports = React.createClass({
  render: function() {
    var datas = this.props.data;
    var dates = datas.map(function(data) {
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