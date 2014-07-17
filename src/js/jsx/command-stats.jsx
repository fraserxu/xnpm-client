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
        this.setState({data: res.body})
      }.bind(this))
  },
  render: function() {
    return (
      <p className="stats pull-right">{this.state.data.remainingPercent}% ({this.state.data.remainingMb} of {this.state.data.cap} MB) remaining.</p>
    );
  }
});


