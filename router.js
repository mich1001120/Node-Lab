function route(handle, pathname, response, postData){
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') { //確定回傳的函數是否存在，存在就執行
        handle[pathname](response, postData);
    }else{
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;