/**
 * Created by Cameron on 8/18/14.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var answerSchema = new Schema({
    question: String,
    responses: [{responseName : String}],
    user: String,
    date: Date
});

module.exports = mongoose.model('Answer', answerSchema);