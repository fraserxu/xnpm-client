/** @jsx React.DOM */
'use strict';

var React = require('react');
var CommandList = require('./command-list');
var CommandStats = require('./command-stats');
// var ReactTransitionGroup = React.addons.TransitionGroup;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      page: this.props.page,
      data: []
    };
  },
  render: function() {
    return (
      <div className="commandBox">
        <h1>NPM command history</h1>
        <CommandStats/>
        <CommandList data={this.state.data} />
      </div>
    );
  }
});
