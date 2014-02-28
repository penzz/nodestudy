var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandler");

var handle = {};
handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;
handle["/input"]=requestHandlers.input;
server.start(router.route,handle);
