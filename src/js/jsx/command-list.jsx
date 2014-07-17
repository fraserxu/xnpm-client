/** @jsx React.DOM */
'use strict';

var React = require('react');
// var ReactTransitionGroup = React.addons.TransitionGroup;

module.exports = React.createClass({
  render: function() {
    var commandNodes = this.props.data.map(function (data, i) {
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