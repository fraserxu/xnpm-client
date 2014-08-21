/** @jsx React.DOM */
'use strict';

var React = require('react');
var CalHeatMap = require('cal-heatmap');

module.exports = React.createClass({
  render: function() {
    var cal = new CalHeatMap();
    cal.init({});
    return (
      <div id="cal-heatmap">
      </div>
    );
  }
});
