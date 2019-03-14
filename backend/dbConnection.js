module.exports = function(mongoose) {

    const URI = "mongodb://localhost/tasks";

    mongoose.connect(URI, {useNewUrlParser: true}, 
        err => console.log("db connections", err)
    );
}