var express = require("express");
var url = require('url');
var routes = require("./routes");

var app = express();
var router = express.Router()

router.use(function async (req, res, next) {
    console.log(`Incoming request method: ${req.method}`);
    const req_path = url.parse(req.url).pathname.slice(1);
    console.log(`on path ${req_path}`);
    // attemp to get method from routes
    routes(req, res, next);
});

// mount the router on the app
app.use('/', router)

module.exports = app;
