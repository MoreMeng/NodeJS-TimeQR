const express = require("express");
const morgan = require('morgan');
const bodyParser = require("body-parser");

const app = express();

module.exports = () => {

    app.use(morgan('dev'));

    app.use(bodyParser.json())

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use((req, res, next) => {
        //Enabling CORS
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization")
        next()
    })
    return app;
}