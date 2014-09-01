/** @jsx React.DOM */
'use strict';

var React = require('react');
var CalHeatMap = require('cal-heatmap');

module.exports = React.createClass({
  componentDidMount: function() {
    var cal = new CalHeatMap();
    cal.init({
      domain: 'month',
      tooltip: true,
      start: new Date(2014, 6, 11),
    });
  },
  render: function() {
    return (
      <div id="cal-heatmap">
      </div>
    );
  }
});
