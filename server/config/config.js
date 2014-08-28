/**
 * Created by Cameron on 8/20/14.
 */

var env = process.env.NODE_ENV || 'development';

var config = {
    port: 1337,
    db: 'mongodb://',
    host: 'localhost'
};

module.exports = config;