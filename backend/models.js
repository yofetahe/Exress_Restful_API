const mongoose = require('mongoose')
const TasksSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false}
})

const tasks = mongoose.model('Tasks', TasksSchema);

module.exports = { tasks }