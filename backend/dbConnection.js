module.exports = function(mongoose) {
    const uri = "mongodb://localhost/tasks";
    mongoose.connect(uri, {useNewUrlParser: true}, 
        err => console.log("db connections", err));
}