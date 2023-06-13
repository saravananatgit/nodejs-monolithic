 function   loggin(req, res, next) {
    console.log("Logger middleware")
    next()
}

module.exports = loggin;