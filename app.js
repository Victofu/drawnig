var http = require('http'),
		fs = require('fs');



var server = http.createServer(function(req, res) {
	fs.readFile('./index.html', 'utf-8', function(error, content) {
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end(content);
	});
});


var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {

	socket.on('coordinates', function(coordinates) {
		io.emit('coordinates', coordinates);
	});

});


server.listen(8080);