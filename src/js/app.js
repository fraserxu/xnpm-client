/** @jsx React.DOM */
'use strict';

var React = require('react');
var Routes = require('react-router/Routes');
var Route = require('react-router/Route');
var Link = require('react-router/Link');
var CommandBox = require('./jsx/box');
var BarChartBox = require('./jsx/barchart-box');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="app">Dashboard</Link></li>
            <li><Link to="commandbox">Command Table</Link></li>
            <li><Link to="barchartbox">Bar Chart</Link></li>
          </ul>
        </header>

        <this.props.activeRouteHandler />
      </div>
    );
  }
});

var routes = (
  <Routes location='history'>
    <Route name="app" path="/" handler={App}>
      <Route name='commandbox' path='/command' handler={CommandBox} />
      <Route name='barchartbox' path='/barchart' handler={BarChartBox} />
    </Route>
  </Routes>
);

React.renderComponent(routes, document.body);