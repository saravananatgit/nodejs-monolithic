 
const morgan = require("morgan");
const express = require("express");
 const app = express();

if (app.get('env') == 'development') {
    app.use(morgan('tiny'))
    console.log("Morgan eenabled in Development only")
}


const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listining the port ${port}`))

 