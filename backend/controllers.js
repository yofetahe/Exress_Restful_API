const model = require('./models')

module.exports = {

    getAllTasks: (req, res) => {
        model.tasks.find()
        .then((data)=> res.json(data))        
    },

    getTaskById: (req, res) => {
        model.tasks.find({_id: req.params.id})
        .then((data) => res.json(data))
        .catch((err) => console.log(err))
    },

    addTask: (req, res) => {
        model.tasks.create(req.body)
        .then((data) => res.json(data))
        .catch((err) => console.log(err))
    },

    updateTask: (req, res) => {
        model.tasks.update({_id: req.params.id})
        .then(data => res.json(data))
        .catch(err => console.log(err))
    },

    deleteTask: (req, res) => {
        model.tasks.findOneAndDelete({_id: req.params.id})
        .then(data => res.json(data))
        .catch(err => console.log(err))
    }
}