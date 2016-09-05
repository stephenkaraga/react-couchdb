var express = require('express');
var app = new express();
var cradle = require('cradle');
var db = new(cradle.Connection)().database('initial');

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {

});

app.get('documents', function(request, response) {

});

app.get('/documents/:name', function(request, response) {

});