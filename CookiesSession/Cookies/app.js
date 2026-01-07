const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const Cookies = require('cookies');
const keys = ['keyboard cat'];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/login', (req, res) => {
 const {username} = req.body;

 // Create cookies
 const cookies = new Cookies(req, res, {keys: keys});

 // Set cookie
 cookies.set('user', JSON.stringify({
  isAdmin: false,
  username}));

  res.redirect('/profile');
})


app.get('/login', (req, res) => {
 // Create cookies
 const cookies = new Cookies(req, res, {keys});

 // Get cookie
 let data = cookies.get('user');

 if(!data) return res.render('login');
 res.redirect('/profile');
})

app.get('/profile', (req, res) => {
 // Create cookies
 const cookies = new Cookies(req, res, {keys: keys});

 // Get cookie
 let data = cookies.get('user');

 if(!data) return res.redirect('/login');
  data = JSON.parse(data);
  res.render('profile', {username: data.username})
})


app.get('/admin', (req, res) => {
 // Create cookies
 const cookies = new Cookies(req, res, {keys});

 // Get cookie
 let data = cookies.get('user');

 if(!data) return res.redirect('/login');
  data = JSON.parse(data);

  if(data.isAdmin) return res.render('admin', {adminName: data.username})
  res.redirect('/profile');
})



app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
})