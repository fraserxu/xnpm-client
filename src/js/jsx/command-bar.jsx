/** @jsx React.DOM */
'use strict';

var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      width: 0,
      height: 0,
      offset: 0
    }
  },

  render: function() {
    return (
      <rect fill={this.props.color}
        height={this.props.height} width={this.props.width}
        x={0} y={this.props.offset} />
    );
  }
});