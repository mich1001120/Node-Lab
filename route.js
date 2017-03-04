var handlers = require("./requestHandlers");

function route(pathname, res){

    var handle = {};

    handle["/"] = handlers.home;
    handle["/home"] = handle.home;
    handle["/blog"] = handlers.blog;

    if(typeof handle[pathname] === 'function') {
        return handle[pathname](res);
    }else{
        console.log("404 Not Found " + pathname);
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("404 Not Found " + pathname);
    }
}

exports.route = route;