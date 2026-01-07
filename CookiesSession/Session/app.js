const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const session = require('express-session');

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

// Configure session middleware
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

// logic for routes
app.post('/login', (req, res) => {
 const {username} = req.body;
 req.session.cnt = 0;
 req.session.user = username;
 req.session.isAdmin = false;
 res.redirect('/profile');
})

// GET: /login
app.get('/login', (req, res) => {
 if(req.session.user) return res.redirect('/profile');
 res.render('login');
})

// GET: /profile
app.get('/profile', (req, res) => {
 if(!req.session.user) return res.redirect('/login');
 req.session.cnt += 1;
 res.render('profile', {
  username: req.session.user,
  count: req.session.cnt
 })
})

// GET: /admin
app.get('/admin', (req, res) => {
 if(!req.session.user) {
    res.redirect('/login');
 } 
 return res.render('admin');
})

app.listen(PORT, () => {  
  console.log(`Server is running on port ${PORT}`);
});