'use strict';

var express = require('express'); // do not change this line

// http://localhost:8080/missing should return a status code 404 with 'your princess is in another castle' in plain text

// http://localhost:8080/redirect should redirect the request to '/redirected' by using 302 as the status code

// http://localhost:8080/cache should return 'cache this resource' in plain text and set the cache max age to a day

// http://localhost:8080/cookie should return 'i gave you a cookie' in plain text and set 'hello=world' as a cookie

// http://localhost:8080/check should return 'yes' / 'no' in plain text depending on whether the browser has the 'hello' cookie

var app = express();
var port = process.env.PORT || 8080
var cookieParser = require('cookie-parser');
app.use(cookieParser());


app.get('/missing', function (req, res) {
    res.status(404);
    res.set({
        'Content-Type': 'text/plain'
    });
    res.send('your princess is in another castle');
});

app.get('/redirect', function (req, res) {
    res.status(302);
    res.redirect('/redirected');
    res.send();
});

app.get('/redirected', function (req, res) {
    res.status(200);
    res.set({
        'Content-Type': 'text/plain'
    });
    res.send();
});

app.get('/cache', function (req, res) {
    res.status(200);
    res.set({
        'Content-Type': 'text/plain',
        'Cache-Control': 'max-age=86400'
    });
    res.send('cache this resource');
});
app.get('/cookie', function (req, res) {
    res.status(200);
    res.set({
        'Content-Type': 'text/plain', 'Set-Cookie': 'hello=world'
    });
    res.send('i gave you a cookie');
});

app.get('/check', function (req, res) {
    res.status(200);
    res.set({
        'Content-Type': 'text/plain'
    });

    var cookie = req.cookies.hello;

    if(cookie === 'world') {
        res.send('yes');
    }
    else {
        res.send('no');
    }
});

app.listen(port);