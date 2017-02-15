var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/', proxy({
  target: '<your website>',
  auth: '<your username>:<your password>',
  changeOrigin: true,
}));

app.listen(3000);