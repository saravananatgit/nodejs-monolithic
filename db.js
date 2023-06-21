const mongoose = require('mongoose');

const dbConnection = mongoose.connect('mongodb://localhost/playground')
.then(res => console.log('DB connected'))
    .catch(err => console.log('DB is not connected', err))

module.exports = dbConnection;