'use strict';

var express = require('express'); // do not change this line

// http://localhost:8080/lorem should return '<!DOCTYPE html><html><body>lorem ipsum</body></html>' as html


var app = express()
var port = process.env.PORT || 8080

app.get('/lorem', (req, res) => res.send('<!DOCTYPE html><html><body>lorem ipsum</body></html>'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

