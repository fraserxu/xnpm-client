/** @jsx React.DOM */
'use strict';

var React = require('react');
var d3 = require('d3');
var _ = require('lodash');
var Bar = require('./bar');

module.exports = React.createClass({
  render: function() {
    var dates = this.props.data.map(function(data) {
      return new Date(data.timestamp).getDate()
    })
    dates = _.values(_.countBy(dates, function(date) {return date}));

    var props = this.props;

    var xScale = d3.scale.linear()
      .domain([0, d3.max(dates)])
      .range([0, props.height]);

    var yScale = d3.scale.ordinal()
      .domain(d3.range(dates.length))
      .rangeRoundBands([0, this.props.height], 0.05);

    var bars = _.map(dates, function(point, i) {
      return (
        <Bar width={xScale(point)} height={yScale.rangeBand()} offset={yScale(i)} availableWidth={props.width} color={props.color} key={i} />
      )
    });

    return (
      <g>{bars}</g>
    );
  }
});