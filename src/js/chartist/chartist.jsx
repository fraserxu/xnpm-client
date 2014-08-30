/** @jsx React.DOM */
'use strict';

var React = require('react');
var _ = require('lodash');
window._ = _
var Chartist = require('chartist');

module.exports = React.createClass({
  componentDidMount: function() {
    var dates = this.props.data.map(function(data) {
      return new Date(data.timestamp).getDate()
    })

    var labels = _.uniq(dates)
    var times = _.values(_.countBy(dates, function(date) {return date}));

    // Our labels and three data series
    var data = {
      labels: labels,
      series: [ times ]
    };

    // We are setting a few options for our chart and override the defaults
    var options = {
      // Don't draw the line chart points
      showPoint: false,
      // Disable line smoothing
      lineSmooth: false,
      // X-Axis specific configuration
      axisX: {
        // We can disable the grid for this axis
        showGrid: false
        // and also don't show the label
        // showLabel: false
      },
      // Y-Axis specific configuration
      axisY: {
        // Lets offset the chart a bit from the labels
        offset: 40,
        // The label interpolation function enables you to modify the values
        // used for the labels on each axis. Here we are converting the
        // values into million pound.
        labelInterpolationFnc: function(value) {
          return parseInt(value) + 'times';
        }
      }
    };


    Chartist.Line('.ct-chart', data, options);
  },
  render: function() {
    return (
      <div className="ct-chart">
      </div>
    );
  }
});
