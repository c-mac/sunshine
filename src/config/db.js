/**
 * Created by Cameron on 8/18/14.
 */

//module.exports = {
//    'url' : 'mongodb://' + config.user + ':' + config.password + '@ds049558.mongolab.com:49558/cmac-sample'
//};

var mongoose = require('mongoose');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.conection;

    db.on('error', function() {
        throw new Error('Unable to connect to database at ' + config.db);
    });
}
