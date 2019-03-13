const controllers = require('./controllers')

module.exports = function(app){

    app
        .get('/', controllers.getAllTasks)
        .get('/api/task/:id', controllers.getTaskById)
        .post('/api/task', controllers.addTask)
        .put('/api/task/:id', controllers.updateTask)
        .delete('/api/task/:id', controllers.deleteTask)
}