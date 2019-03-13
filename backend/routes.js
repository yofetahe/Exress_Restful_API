const controllers = require('./controllers');

module.exports = app => {

    app
        .get('/api/tasks', controllers.getAllTasks)
        .get('/api/tasks/:id', controllers.getTaskById)
        .post('/api/tasks', controllers.addTask)
        .put('/api/tasks/:id', controllers.updateTask)
        .delete('/api/tasks/:id', controllers.deleteTask)
}