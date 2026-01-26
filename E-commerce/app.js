const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const mongoose = require('mongoose');
const hbs = require('hbs');
const session = require('express-session');
const passport = require('./authentication/passport');
const User = require('./models/users') 

// ------------------------------ Session Setup ------------------------------- //
app.use(
  session({
    secret: 'jhkjdsllkjd k',
    resave: false,
    saveUninitialized: true,
    // store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/' })
  })
);

app.use(passport.initialize());
app.use(passport.session());




// setting up the partials of HBS
hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));


// app.use(async(req, res, next) => {
//  let user = await User.findOne({
//   _id: "68f7c4c93c2d68d699ed7100"
//  });
//  req.user = user;
//  next();
// })




//Routes
const homeRouter = require('./routes/home')
app.use('/', homeRouter);

const adminRouter = require('./routes/admin');
const {isAdmin} = require('./middlewares/isAdmin')
app.use('/admin', isAdmin, adminRouter);

const shopRouter = require('./routes/shop');
const {isLoggedIn} = require('./middlewares/isLoggedIn')
app.use('/shop', isLoggedIn, shopRouter);

mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce')
.then(() => {
 app.listen(PORT, () => {
 console.log(`http://localhost:`+PORT);
})
})
.catch(err => {
 console.log(err);
})