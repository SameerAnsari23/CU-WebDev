const express = require('express');
const app = express();
const path = require('path');
const Cookies = require('cookies');

const PORT = 3000;
const keys = ['keyboard cat'];

// ---------------------------
// App Configuration
// ---------------------------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

// ---------------------------
// POST: /login
// ---------------------------
app.post('/login', (req, res) => {
  const { username } = req.body;
  // Create a cookies
  const cookies = new Cookies(req, res, { keys });
  // Set a cookies to a value
  cookies.set(
    'user',
    JSON.stringify({
      isAdmin: false,
      username,
    })
  );
  res.redirect('/profile');
});

// ---------------------------
// GET: /login
// ---------------------------
app.get('/login', (req, res) => {
  const cookies = new Cookies(req, res, { keys });
  // Get cookies
  const data = cookies.get('user');

  if (!data) return res.render('login');
  res.redirect('/profile');
});

// ---------------------------
// GET: /profile
// ---------------------------
app.get('/profile', (req, res) => {
  const cookies = new Cookies(req, res, { keys });
  let data = cookies.get('user');

  if (!data) return res.redirect('/login');
  data = JSON.parse(data);

  res.render('profile', { username: data.username });
});

// ---------------------------
// GET: /admin
// ---------------------------
app.get('/admin', (req, res) => {
  const cookies = new Cookies(req, res, { keys });
  let data = cookies.get('user');

  if (!data) return res.redirect('/login');
  data = JSON.parse(data);

  if (data.isAdmin) return res.render('admin');
  res.redirect('/profile');
});

// ---------------------------
// Server Start
// ---------------------------
app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
