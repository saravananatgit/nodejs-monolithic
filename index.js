
const express = require("express");
const helmet = require("helmet");

const middleware = require("./middleware/logger");
const courseRouter = require('./router/courses');
require('./server')

require('./db')
const app = express();

//middleware in built & thirdparty
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet()); 
app.use('/api/courses', courseRouter);
app.use(middleware)
