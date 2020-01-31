const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin')

// Return Billing routes app function
module.exports = app => {

  // Stripe call
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge =  await stripe.charges.create({
        amount: 100,
        currency: 'usd',
        source: req.body.id,
        description: '$1 per credit'
    });

    req.user.credits += 1;
    const user = await req.user.save();

    res.send(user)
  });

}

