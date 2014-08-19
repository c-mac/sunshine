/**
 * Created by Cameron on 8/16/14.
 */

var express = require('express');
var app = express();
var mongoose = require('mongoose');

var config = require('./mongo.json');
var connectionString = 'mongodb://' + config.user + ':' + config.password + '@ds049558.mongolab.com:49558/cmac-sample';


mongoose.connect(connectionString);

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('src/')).listen(1337);