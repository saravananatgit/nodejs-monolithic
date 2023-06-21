const mongoose = require('mongoose')

const courseschema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPubloshed: Boolean,
    price : Number
})
    
const Course = mongoose.model('Courses', courseschema);

module.exports = Course;