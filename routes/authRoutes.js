const passport = require('passport')

// Return app function
module.exports = app => {

  // Google login
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  )

  //  Google auth kickback
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => res.redirect('/surveys')
  )

  // Google logout
  app.get('/api/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

  // Login check
  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })

}
