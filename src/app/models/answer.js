/**
 * Created by Cameron on 8/18/14.
 */
var mongoose = require('mongoose');

var answerSchema = mongoose.Schema({
    question: String,
    responses: [{responseName : String}],
    user: String,
    date: Date
});

module.exports = mongoose.model('Answer', answerSchema);