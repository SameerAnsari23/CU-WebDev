const path = require('path')
const express = require('express');
const router = express.Router();
const passport = require('passport');

const homeController = require('../controllers/home');
router.get('/', homeController.getHome);
router.get('/login', homeController.getLogin);

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication → redirect to profile
    res.redirect('/profile');
  }
);

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/signup', homeController.getSignup)
router.post('/signup', homeController.postSignup)
router.get('/profile', homeController.getProfile);
router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

module.exports = router;