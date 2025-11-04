
const mainLogger = (req, res, next) => {
    console.log("Request received on", JSON.stringify(req.originalUrl));  
    next()
}

const secondLogger = (req, res, next) => {
    console.log("BaseLogger Request received on", JSON.stringify(req.baseUrl));  
    next()
}

module.exports = {
    mainLogger, secondLogger
}