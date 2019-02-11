'use strict';

var express = require('express'); // do not change this line
var session = require('express-session'); // do not change this line

// preface: use the express-session middleware with the memory storage which should make this task rather easy

// http://localhost:8080/hello should return 'you must be new' in plain text and implicitly set an ident cookie by using the session middleware

// http://localhost:8080/test should return 'your history:\n  /hello' in plain text

// http://localhost:8080/world should return 'your history:\n  /hello\n  /test' in plain text

// [now sending requests from a different browser]

// http://localhost:8080/lorem should return 'you must be new' in plain text and implicitly set an ident cookie by using the session middleware

// http://localhost:8080/moshimoshi should return 'your history:\n  /lorem' in plain text

// http://localhost:8080/ipsum should return 'your history:\n  /lorem\n  /moshimoshi' in plain text

// [sending requests from the original browser again]

// http://localhost:8080/again should return 'your history:\n  /hello\n  /test\n /world' in plain text

// [the server restarts and looses all cookies]

// http://localhost:8080/servus should return 'you must be new' in plain text and implicitly set an ident cookie by using the session middleware

var app = express();
var port = process.env.PORT || 8080


app.use(session({
    'store': new session.MemoryStore(),
    secret: 'super-duper',
    resave: true,
    saveUninitialized: true,
    'cookie': {
        'maxAge': 86400000
    }
}));

app.get('/:parameter', function(req, res) {

    if (req.session.example === undefined) {
        res.status(200);
        res.set({ 'Content-Type': 'text/plain'});
        req.session.example = [];
        req.session.example.push(decodeURIComponent(req.url));
        res.send('you must be new');
    } else {
        res.status(200);
        res.set({ 'Content-Type': 'text/plain'});

        var test = req.session.example.slice();
        req.session.example.push(decodeURIComponent(req.url));
        res.send('your history:\n  ' + test.join('\n  '));
        
    }
});

app.listen(port);