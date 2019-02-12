function passport(req, res, next, callback) {
  if (!req.session.user) return callback();
  res.locals.user = req.session.user
  return next()
}

// middleware: check signin status
exports.sign = function(checkRequired, signPath) {
  return function(req, res, next) {
    passport(req, res, next, function() {
      if (!checkRequired) return next();
      if (!req.xhr) return res.redirect(signPath || '/signin');
      return res.json({
        stat: 'error',
        error: new Error('auth required')
      });
    });
  };
}

// router: signout
exports.signout = function(req, res, next) {
  if (!req.session.user) return res.redirect('back');
  delete req.session.user;
  return res.redirect('back');
}