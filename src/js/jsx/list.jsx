/** @jsx React.DOM */
'use strict';

var React = require('react');
var shoe = require('shoe');
var stream = shoe('/api');

module.exports = React.createClass({
  getInitialState: function() {
    return {items: []};
  },
  componentWillMount: function() {
    stream.on('data', function (item) {
      this.state.items.push(JSON.parse(item));
      this.setState({items: this.state.items});
    }.bind(this));
  },
  render: function() {
    var commandNodes = this.state.items.map(function (data, i) {
      return <tr key={i}><td>{data.command}</td><td>{data.timestamp}</td></tr>;
    });
    return (
        <table>
          <thead>
            <tr><th>command</th><th>timestamp</th></tr>
          </thead>
          <tbody>
            {commandNodes}
          </tbody>
        </table>
    );
  }
});