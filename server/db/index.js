const mongoose = require('mongoose');

var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const URI = 'mongodb://' + process.env.MONGODB_HOST + '/' + process.env.MONGODB_NAME;
console.log(URI);

const db = mongoose.connect(URI, options)
    .then(db => console.log('DB is connected'))
    .catch((err) => {
        console.log(err);
        console.error(err.reason)
    });

module.exports = db;