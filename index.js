"use strict"

let port = 3000

const express = require('express');
const app = new express();
const cradle = require('cradle');
const db = new(cradle.Connection)().database('initial');

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {

});

app.get('documents', function(request, response) {

});

app.get('/documents/:name', function(request, response) {

});