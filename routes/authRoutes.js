const passport = require('passport')

// Return an app function
module.exports = app => {
  app.get('/', (req, res) => {
    res.send('Hello World')
  })

  // Google login
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  )

  //  Google authentication kickback
  app.get('/auth/google/callback', passport.authenticate('google'));

  // Google logout
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user)
  })

  // Login check
  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })
}
