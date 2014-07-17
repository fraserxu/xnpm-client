'use strict';

var express = require('express');
var path = require('path');
var tinylr = require('tiny-lr');
var shoe = require('shoe');
var fs = require('fs');
var path = require('path');
var gutil = require('gulp-util');
var hyperquest = require('hyperquest');
var JSONStream = require('JSONStream');
var es = require('event-stream');
var superagent = require('superagent');

var stats_url = 'https://data.sparkfun.com/output/bGGqZ4OwVdI6n1QDDbXV/stats.json';
var datas_url = 'https://data.sparkfun.com/output/bGGqZ4OwVdI6n1QDDbXV.json';

module.exports = function(port, lrport) {
  var lr = tinylr();
  lr.listen(lrport);

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
      .pipe(es.mapSync(function (data) {
        stream.write(JSON.stringify(data))
      }))
  }

  var sock = shoe(function (stream) {
    readData(stream);
  });

  sock.install(app.listen(port), '/api');
  gutil.log('Listening on', port + ' / ' + lrport);

  return {
    lr: lr,
    app: app
  };
};
