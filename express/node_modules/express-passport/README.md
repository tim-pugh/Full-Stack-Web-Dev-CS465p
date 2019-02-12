## express-passport ![npm](https://badge.fury.io/js/express-passport.png)

a passport middleware express-scaffold built-in.

### Installation
````
$ npm install express-passport
````

### Example
````javascript
var app = express();
var passport = require('express-passport');

var passport = passport.sign();

// pass true to forbidden unauthed requests.
var signinRequired = passport.sign(true);

// pass true and a signin path to custom your sign middleware
// var signinRequired = passport.sign(true, '/login');

// every one could access
// user's infomation will be stored in `res.locals.user`
app.get('/', passport, routes.home);

// only signined users could access
// others will be redirected to `/signin` (by default)
app.get('/authed', check, routes.authed);

// signout
// after delete `res.locals.user`, user will be redirected back.
app.get('/signout', passport.signout);
````

### API
check this file: `index.js`

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2014 turing &lt;o.u.turing@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
![docor](https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/doctor.png)
built upon love by [docor](https://github.com/turingou/docor.git) v0.1.3