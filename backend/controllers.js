const { Task } = require('./models');

module.exports = {

  getAllTasks: (req, res) => {
    Task.find()
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  getTaskById: (req, res) => {
    const ID = req.params.id;
    Task.find({ _id: ID })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  addTask: (req, res) => {
    const DATA = req.body;
    Task.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateTask: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Task.findOneAndUpdate({ _id: ID }, DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  deleteTask: (req, res) => {
    const ID = req.params.id;
    Task.findOneAndDelete({ _id: ID })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
}