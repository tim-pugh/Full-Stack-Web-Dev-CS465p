'use strict';

var express = require('express'); // do not change this line

// http://localhost:8080/ should return 'you have accessed the root' in plain text

// http://localhost:8080/test/hello should return 'you have accessed "hello" within test' in plain text

// http://localhost:8080/test/world should return 'you have accessed "world" within test' in plain text

// http://localhost:8080/attributes?hello=world&lorem=ipsum should return the following as html (row order might differ)
//   <!DOCTYPE html>
//   <html>
//     <body>
//       <table border="1">
//         <tr><td>hello</td><td>world</td></tr>
//         <tr><td>lorem</td><td>ipsum</td></tr>
//       </table>
//     </body>
//   </html>

// http://localhost:8080/attributes?first=1&second=2&third=3 should return the following as html (row order might differ)
//   <!DOCTYPE html>
//   <html>
//     <body>
//       <table border="1">
//         <tr><td>first</td><td>1</td></tr>
//         <tr><td>second</td><td>2</td></tr>
//         <tr><td>third</td><td>3</td></tr>
//       </table>
//     </body>
//   </html>

var app = express()
var port = process.env.PORT || 8080

app.get('/', function(req, res) {
    res.status(200);
    res.set({
    'Content-Type': 'text/plain'
    });
    res.send('you have accessed the root');
    });
    app.get('/test/:parameter', function(req, res) {
    res.status(200);
    res.set({
    'Content-Type': 'text/plain'
    });
    res.send('you have accessed \"' + req.params.parameter + '\" within test');
    
    });

    app.get('/attributes', function(req, res) {
        res.status(200);
        res.set({
        'Content-Type': 'text/html'
        });

        var temp0 = '<table border=\"1\">';
        var temp = querystring.parse(decodeURIComponent(req.url.substr(12)));
        var temp2 = '<tr><td>';
        var temp3 = '</td><td>';
        var temp4 = '</td></tr>';

        for (var prop in temp) {
            temp0 +=temp2 + prop + temp3 + temp[prop] + temp4;

        }
        res.send(temp0);
        
        });
        app.get('/unexpected', function(req, res) {
            res.status(200);
            res.set({
            'Content-Type': 'text/plain'
            });
            res.send('');
            
            });
        
    app.listen(port);