var { InvalidReqError } = require("./../../infra/errors");

var hello_world = (req, res, next) => {
    if (Object.keys(req.body).length !== 0) {
        res.json({"Hello": "World"});
    } else {
        throw new InvalidReqError("Invalid request. Think you're missing a lil body");
    }
}

module.exports = hello_world;
