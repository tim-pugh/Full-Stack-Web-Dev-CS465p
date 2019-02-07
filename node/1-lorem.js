'use strict';

var http = require('http'); // do not change this line

// any request should return '<!DOCTYPE html><html><body>lorem ipsum</body></html>' as html
var server = http.createServer(function(req,res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.write('lorem ipsum');
    res.end();
});
console.log('server listening on port 8080');
server.listen(process.env.PORT || 8080);