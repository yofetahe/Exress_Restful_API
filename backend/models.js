const mongoose = require('mongoose');
require('./dbConnection')(mongoose);

const TasksSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false}
});

const Task = mongoose.model('Tasks', TasksSchema);
module.exports = { Task };