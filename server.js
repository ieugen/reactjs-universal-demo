"use strict";
var babel = require("babel/register");

var express = require('express'),
    app = express(),
    simpleRoutes = require("./simple-routes");

app.use(simpleRoutes);
app.use("/public", express.static("public"))

var port = 3000 | process.env.PORT;

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})

