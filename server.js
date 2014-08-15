'use strict';

var express = require('express');
var path = require('path');
var shoe = require('shoe');
var fs = require('fs');
var hyperquest = require('hyperquest');
var JSONStream = require('JSONStream');
var superagent = require('superagent');
var map = require("through2-map");

var stats_url = 'https://data.sparkfun.com/output/bGGqZ4OwVdI6n1QDDbXV/stats.json';
var datas_url = 'https://data.sparkfun.com/output/bGGqZ4OwVdI6n1QDDbXV.json';

var app = express();
app.use(express.static(path.resolve('./')));

app.get('/stats', function(req, res){
  superagent.get(stats_url)
    .end(function(response) {
      res.send(response.body)
    })
});

var readData = function (stream) {
  hyperquest(datas_url)
    .pipe(JSONStream.parse('*'))
    .pipe(map.obj(function (chunk) {
      return chunk
    }))
    .on('data', function(data) {
      stream.write(JSON.stringify(data));
    });
}

var sock = shoe(function (stream) {
  readData(stream);
});

var port = Number(process.env.PORT || 5000);
sock.install(app.listen(port), '/api');

