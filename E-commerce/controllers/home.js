const Products = require('../models/products');
const User = require('../models/users')
const bcrypt = require('bcrypt')
const saltRounds = 10;

module.exports.getLogin = (req, res) => {
 if(req.isAuthenticated()) return res.redirect('/profile');
 res.render('login');
}

module.exports.getHome = async (req, res, next) => {
   if(!req.isAuthenticated()) return res.redirect('/login')
   try {
      let products = await Products.find({});
      const { getProductsCategoryWise } = require('../utils/library')
      let categoryProducts = getProductsCategoryWise(products)
      res.render('shop/home', {
         products: categoryProducts,
            isAdmin: (req.user.role == 'admin') ? true: false,
            isLoggedIn: true
      })
   }
   catch (err) {
      console.log(err);
   }
}


module.exports.getSignup = (req, res, next) => {
 if(req.isAuthenticated()) return res.redirect('/profile')
 res.render('signup')
}

module.exports.postSignup = async (req, res, next) => {
 const {username, password} = req. body;
 try {
  let user = await User.findOne({username})
  if(user) {
   return res.render('signup', {
    msg: "this username is already taken"
   })
  }
  
  bcrypt.hash(password, saltRounds, async function(err, hash) {
    // Store hash in your password DB.
    try {
     user = await User.create({
      username,
      password: hash
     });
     res.redirect('login')
    }
    catch(err) {
     console.log(err)
    }
});
 }
 catch(err) {
  next(err)
 }
}

module.exports.getProfile = (req, res) => {
 if (req.isAuthenticated()) {
    res.render('profile', {user: req.user});
  }
  else {
    res.redirect('/login');
  }
}