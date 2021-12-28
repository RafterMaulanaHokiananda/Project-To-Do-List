'use strict'

module.exports = function(app){
    var controller = require('./controller')
    app.route('/')
    .get(controller.index);

    app.route('/todolist')
    .get(controller.getList);

    app.route('/todolist/:id')
    .get(controller.getListbyID);

    app.route('/todolist/post')
    .post(controller.postList);

    app.route('/todolist/put/:id')
    .put(controller.putList);

    app.route('/status')
    .get(controller.getStatus);

}