/**
 * Created by Cameron on 8/18/14.
 */

// For now, let's keep this simple by using just a single response (not an array)
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var answerSchema = new Schema({
    question: String,
    response: String,
    user: String,
    date: Date
});

module.exports = mongoose.model('Answer', answerSchema);