function route(pathname,handle,response){
	console.log("router:"+pathname);
	if(typeof handle[pathname]==='function'){
		handle[pathname](response);
	}
	else{
		console.log("error");
		response.writeHead(404,{"Content-Type":"text/plain"});
		response.write("404 not found");
		response.end();
	}
}
exports.route = route;
