const http = require('http');

const hostname = '0.0.0.0';
const port = '80';

httpd = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Hello World');
});

httpd.listen(port, hostname, function(){
	console.log('server start');
});
