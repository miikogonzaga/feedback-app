const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

// To the DB
mongoose.connect(keys.mongoURI);

const app = express();

// Cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// Production routing
if (process.env.NODE_ENV === 'production') {
  // Express serves production assets
  app.use(express.static('client/build'))

  // Express serves index.html if route is not recognized
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
