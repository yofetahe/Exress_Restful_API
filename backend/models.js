const mongoose = require('mongoose')

mongoose.Promise = Promise
const uri = "mongodb://localhost/tasks"
    
mongoose.connect(uri, {useNewUrlParser: true}, (err)=> console.log("db connections", err))

const TasksSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false}
})

const tasks = mongoose.model('Tasks', TasksSchema);

module.exports = { tasks }