/** @jsx React.DOM */
'use strict';

var React = require('react');
var superagent = require('superagent');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentWillMount: function() {
    superagent.get('/stats')
      .end(function(res) {
        var data = {
          remainingPercent: (res.body.remaining / res.body.cap * 100).toFixed(2),
          remainingMb: (res.body.remaining / 1024 / 1024).toFixed(2),
          cap: res.body.cap /1024 / 1024
        }
        this.setState({data: data})
      }.bind(this))
  },
  render: function() {
    return (
      <p className="stats pull-right">{this.state.data.remainingPercent}% ({this.state.data.remainingMb} of {this.state.data.cap} MB) remaining.</p>
    );
  }
});


