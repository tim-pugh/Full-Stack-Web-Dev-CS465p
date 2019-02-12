'use strict';

var express = require('express'); // do not change this line
var passport = require('passport'); // do not change this line
var strategy = require('passport-http'); // do not change this line

// preface: use the passport middleware and only grant the user "test" with the password "logmein" access

// note: should the server restart, the browser will still technically be logged in since we are using the http basic access authentication which lets the browser submit the username and the password at each request

// http://localhost:8080/hello should return 'accessible to everyone' in plain text

// http://localhost:8080/world should return 'only accessible when logged in' in plain text if user the user is authenticate, otherwise will prompt for the username and password

// http://localhost:8080/test should return 'only accessible when logged in' in plain text if user the user is authenticate, otherwise will prompt for the username and password

var app = express();
var parser = require('body-parser');
var cookie = require('cookie-parser');
var port = process.env.PORT || 8080;

app.use(parser.urlencoded({
    'extended': true
}));


app.use(cookie());

app.use(passport.initialize());

passport.use(new strategy.BasicStrategy({
        qop: 'auth'
    },
    function (username, done) {
        User.findOne({
            username: username
        }, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            return done(null, user, user.password);
        });
    },
    function (params, done) {
        // validate nonces as necessary
        done(null, true);
    }
));



app.get('/hello', function (req, res) {
    res.status(200);
    res.set({
        'Content-Type': 'text/plain'
    });
    res.send('accessible to everyone');
});

app.get('/test',passport.authenticate('local', { failureRedirect: '/login' }),
 function (req, res) {
    res.status(200);
    res.set({
        'Content-Type': 'text/plain'
    });
    res.send('accessible to everyone');
});



app.listen(port);