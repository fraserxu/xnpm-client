/** @jsx React.DOM */
'use strict';

var React = window.React = require('react');
var CommandBox = require('./table/box');
var BarChartBox = require('./barchart/barchart-box');
var HeatMap = require('./heatmap/heatmap');
var Chartist = require('./chartist/chartist');

// Router
var Routes = require('react-router/Routes');
var Route = require('react-router/Route');
var Link = require('react-router/Link');

// Stream
var shoe = require('shoe');
var stream = shoe('/api');

var items = []
stream.on('data', function (item) {
  items.push(JSON.parse(item));
})

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header>
          <div class='header'>
            <h1>NPM command history</h1>
          </div>

          <nav>
            <ul>
              <li><Link to="app">Dashboard</Link></li>
              <li><Link to="heatmap">Heat Map</Link></li>
              <li><Link to="commandbox">Command Table</Link></li>
              <li><Link to="barchartbox">Bar Chart</Link></li>
              <li><Link to="chartist">Chartist Example</Link></li>
            </ul>
          </nav>
        </header>

        <this.props.activeRouteHandler />
      </div>
    );
  }
});

var routes = (
  <Routes location='history'>
    <Route name="app" path="/" handler={App}>
      <Route name='heatmap' path='/heatmap' handler={HeatMap} />
      <Route name='chartist' path='/chartist' data={items} handler={Chartist} />
      <Route name='commandbox' path='/command' data={items} handler={CommandBox} />
      <Route name='barchartbox' path='/barchart' data={items} handler={BarChartBox} />
    </Route>
  </Routes>
);

React.renderComponent(routes, document.body);
