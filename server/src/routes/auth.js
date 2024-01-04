const router = require('express').Router();
const passport = require('passport');

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
  }),
  (req, res) => {
    res.json({ userId: req.user.id });
  }
);

module.exports = router;
