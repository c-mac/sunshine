/**
 * Created by Cameron on 8/16/14.
 */

var express = require('express');
var app = express();
var mongoose = require('mongoose');

var config = require('./mongo.json');
var connectionString = 'mongodb://' + config.user + ':' + config.password + '@ds049558.mongolab.com:49558/cmac-sample';


/**
 * Mongoose stuff
 */
var questionSchema = mongoose.Schema({
    name: String
});

var Question = mongoose.model('Question', questionSchema);
var something = new Question({name: "How are you?"});
console.log(something.name);


mongoose.connect(connectionString);

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('src/')).listen(1337);