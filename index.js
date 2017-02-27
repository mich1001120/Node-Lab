var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}; //建立一個handle陣列來彙整所有的handler
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);