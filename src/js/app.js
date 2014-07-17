'use strict';

var React = require('react');
var director = require('director');
var CommandBox = require('./jsx/command-box');
var router = director.Router().init();
var shoe = require('shoe');
var stream = shoe('/api');

var _data = []

var app = React.renderComponent(
  CommandBox({
    stream: stream,
    page: router.getRoute(0)
  }),
  document.getElementById('content')
);

stream.on('data', function (data) {
  _data.push(JSON.parse(data));
  app.setState({data: _data});
});

router.on('/:state', function (page) {
  app.setState({page: page});
});
