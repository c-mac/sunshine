/**
 * Created by Cameron on 8/20/14.
 */

var rest = require('../server/controllers/rest');

module.exports = function(app) {
    //app.get('/questions', rest.findAll);
    //app.get('/questions/:id', rest.findOne);
    app.get('/answers/:id', rest.findOne);
    app.get('/answers', rest.findAll);
    //app.post('answer/', rest.add);

}
