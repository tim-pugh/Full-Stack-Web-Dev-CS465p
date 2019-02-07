'use strict';

var http = require('http'); // do not change this line
var url = require('url'); // do not change this line
var querystring = require('querystring'); // do not change this line

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

var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.write('you have accessed the');
        res.end(' root');

    } else if (req.url.indexOf('/test/') === 0) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        console.log(req.url); // prints the full url

        res.end('you have accessed "' + decodeURIComponent(req.url.substr(6)) + '" within test');

    } else if ((req.url.indexOf('/attributes?'))== 0){

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.write('<table border=\"1\"><tbody>');
        var temp = querystring.parse(decodeURIComponent(req.url.substr(12)));
        var temp2 = '<tr><td>';
        var temp3 = '</td><td>';
        var temp4 = '</td></tr>';
        //var temp5 = '<tr><td></td><td></td></tr>';
        var temp6 = '';
        for (var prop in temp)
            temp6 +=temp2 + prop + temp3 + temp[prop] + temp4;




        res.write(temp6);
        res.end('</tbody></table>');
    }else if ((req.url.indexOf('/attributes'))== 0){

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.write('<table border=\"1\"></table>');
        res.end();
    }
    else{
        res.end();
    }


});
console.log('server listening on port 8080');
server.listen(process.env.PORT || 8080);