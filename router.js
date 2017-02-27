function route(handle, pathname){
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') { //確定回傳的函數是否存在，存在就執行
        handle[pathname]();
    }else{
        console.log("No request handler found for " + pathname);
    }
}

exports.route = route;