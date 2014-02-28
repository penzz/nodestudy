function route(pathname,handle){
	console.log("router:"+pathname);
	if(typeof handle[pathname]==='function'){
		handle[pathname]();
	}
	else{
		console.log("error");
	}
}
exports.route = route;
