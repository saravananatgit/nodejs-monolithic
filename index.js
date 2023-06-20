const config = require("config")
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const middleware = require("./middleware/logger");
const courseRouter = require('./router/courses');
const mongoose = require('mongoose');
const app = express();

//middleware in built & thirdparty
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet()); 
app.use('/api/courses', courseRouter);

mongoose.connect('mongodb://localhost/playground')
    .then(res => console.log('DB connected'))
    .catch(err => console.log('DB is not connected', err))

const courseschema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPubloshed: Boolean,
    price : Number
})
    
const Course = mongoose.model('Courses', courseschema);

async function createCourse() {
    const courseObject = new Course({
        name: "MEAN Stack course",
         author: "saravanan",
        tags: ['node','backend'],
        isPubloshed: true,
         price : 20
        
    })
    
    const result = await courseObject.save()
    
     //console.log(result)
    
}

createCourse();

async function getAllCourse() {

    //eq (equal)
    //ne = not equla
    //gt = greater then
    //gte = greater then or equal to
    //lt = lesser then
    //lte = lesser then or equal to
    // in
    //nin

    
    const getCourse = await Course
        //.find({ price: { $lt: 30, } })
        .or([{ price: 100 }, { price: 30 }])
        .and({price : 100, price:20})
       
     console.log("get all course", getCourse)
}

 getAllCourse()



 
if (app.get('env') == 'development') {
    app.use(morgan('tiny'))
    console.log("Morgan eenabled in Development only")
}

 
app.use(middleware)

console.log('app name' + config.get('name'))

const port = process.env.PORT || 3000

app.listen(port, ()=> console.log(`Listining the port ${port}`))