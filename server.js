/**
 * Created by Cameron on 8/16/14.
 */

/** WORKING SERVER CODE **/
//var path = require("path"),
//    indexPath = path.join(__dirname, '../');
//var connect = require('connect');
//var serveStatic = require('serve-static');
//connect().use(serveStatic(indexPath)).listen(1337);



//var express = require('express'),
//    mongoose = require('mongoose'),
//    fs = require('fs'),
//    http = require('http'),
//    config = require('./config/config'),
//    root = __dirname,
//    app = express(),
//    server = null,
//    modelsPath = __dirname + '/server/models';
//
//require('./config/db')(config);
//
///* Dynamically add all models */
//fs.readdirSync(modelsPath).forEach(function (file) {
//    if (file.indexOf('.js') >= 0) {
//        require(modelsPath + '/' + file);
//    }
//});
//
//require('./config/express')(app, config);
//require('./config/routes')(app);
//
//server = http.createServer(app);
//server.listen(config.port, config.host);
//console.log('App started on port ' + config.port);





/** Building basic REST API using: http://scotch.io/tutorials/javascript/build-a-restful-api-using-node-and-express-4#comment-section **/

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 1337,
    router = express.Router(),
    mongoose = require('mongoose'),
    config = require('./mongo.json'),
    Answer = require('./server/models/answer');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


router.use(function(req, res, next) {
    console.log("SOMETHING IS HAPPENING.");
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our API'});
});

router.route('/answers')

    .get(function(req, res) {
        Answer.find(function(err, answers) {
            if (err) {
                res.send(err);
            }

            res.json(answers);
        });
    });


router.route('/answer')

    .post(function(req, res) {
        var answer = new Answer();
        answer.question = req.body.question;
        answer.response = req.body.input_response;
        answer.user = req.body.user;
        answer.date = new Date();

        answer.save(function(err) {
            if (err) {
                res.send(err);
            }

            res.json({ message: 'Answer created!'});
        });
    });

app.use('/api', router);
app.use(express.static(__dirname));

app.listen(port);
console.log('Magic happens on port ' + port);

var connectionString = 'mongodb://' + config.user + ':' + config.password + '@ds049558.mongolab.com:49558/cmac-sample';
mongoose.connect(connectionString);
