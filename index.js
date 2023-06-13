const config = require("config")
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const middleware = require("./middleware/logger");
const courseRouter = require('./router/courses');
const app = express();

//middleware in built & thirdparty
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet());
app.use('/api/courses', courseRouter);
 
if (app.get('env') == 'development') {
    app.use(morgan('tiny'))
    console.log("Morgan eenabled in Development only")
}

 
app.use(middleware)

console.log('app name' + config.get('name'))

const port = process.env.PORT || 3000

app.listen(port, ()=> console.log(`Listining the port ${port}`))