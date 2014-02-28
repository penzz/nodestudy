var exec = require("child_process").exec;

function start(response){
	console.log("start is running");
	exec("ls -lah",function(error,stdout,stderr){
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write(stdout);
		response.end();
	});
}

function upload(response){
	console.log("upload is running");
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("hello upload");
	response.end();
}

function input(res){
	console.log("input is running");
	var body = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/></head>'+
		'<body>'+
		'<form action="/upload" method="post">'+
		'<textarea name="text" rows="20" cols="60"></textarea>'+
		'<input type="submit" value="Submit text"/></form>'+
		'</body>'+
		'</html>';

	res.writeHead(200,{"Content-Type":"text/plain"});
	res.write(body);
	res.end();
}

exports.start = start;
exports.upload = upload;
exports.input = input;
