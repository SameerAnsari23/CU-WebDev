// const { use } = require('react');
const isAdmin = require('../middlewares/isAdmin');
const isLoggedIn = require('../middlewares/isLoggedIn');
const Products = require('../models/products');
const Users = require('../models/users');


module.exports.getProductAll = async (req, res, next) => {
   try {
      let products = await Products.find({});
      const { getProductsCategoryWise } = require('../utils/library')
      let categoryProducts = getProductsCategoryWise(products)
   }
   catch (err) {
      console.log(err);
   }
}

module.exports.getHome = async (req, res, next) => {
   try {
      let products = await Products.find({});
      const { getProductsCategoryWise } = require('../utils/library')
      let categoryProducts = getProductsCategoryWise(products)
      res.render('shop/home', {
         products: categoryProducts,
            isLoggedIn: true,
            isAdmin: (req.user.role == 'admin') ? true : false
      })
   }
   catch (err) {
      console.log(err);
   }
}

module.exports.getProductDetails = async (req, res, next) => {
   try {
      const {id} = req.params;
      let product = await Products.findOne({ _id: id })
      res.render('shop/product-details', {
         product: product,
         isLoggedIn: true
      })
   }
   catch (err) {
      next(err);
   }
}

module.exports.getAddToCart = async(req, res, next) => {
   try{
    const {id} = req.params;
    let cart = req.user.cart;
    let idx = -1;
    cart.forEach((item, i) => {
      if(item.id == id) {
         idx = i;
      }
    })
    if(idx == -1) {
      cart.unshift({
         id: id,
         quantity: 1
      })
    }
    else {
      cart[idx].quantity++;
    }
    // yeh make sure krne ke liye ki db mein changes ho jaaye 
    req.user.save();
    res.redirect('/shop/cart')
   }
   catch(err) {
      next(err);
   }

}

module.exports.getCart = async(req, res, next) =>{
 try {
   if (!req.user) return res.redirect('/login'); // safety check
   const {id} = req.params;
   let user = await Users.findOne({_id: req.user._id}).populate('cart.id')
   // console.log(user.cart)
   let totalPrice = 0;
   user.cart.forEach((item) => {
      totalPrice += item.id.price*item.quantity;
   })
   res.render('shop/cart', {
      cart:user.cart,
      totalPrice,
      isLoggedIn: true,
      isAdmin: (req.user.role == 'admin') ? true : false
   });
 }
 catch(err) {
   next(err);
 }
}

module.exports.getIncreaseCart = async(req,res,next) => {
   const {id} = req.params;
   let cart = req.user.cart;
   let idx;
   cart.forEach((item, i) => {
      if(item.id == id) {
         idx = i;
      }
   })
   cart[idx].quantity++;
   await req.user.save();
   try{
     let user = await Users.findOne({_id: req.user._id}).populate('cart.id');
     let totalPrice = 0;
     user.cart.forEach((item) => {
      totalPrice += item.id.price*item.quantity;
     })
     res.send({
      id:user.cart,
      totalPrice,
            isAdmin: (req.user.role == 'admin') ? true : false
     })
   }
   catch(err) {
      next(err)
   }
}

module.exports.getDecreaseCart = async(req, res, next) => {
   const {id} = req.params;
   let cart = req.user.cart;
   let idx;
   cart.forEach((item, i) => {
      if(item.id == id){
      idx = i;
      }
   })
   if(cart[idx].quantity > 1) {
      cart[idx].quantity--;
   } else if(cart[idx].quantity == 1) {
      cart.splice(idx,1);
   }
   await req.user.save();
   try {
      let totalPrice = 0;
      let user = await Users.findOne({_id: req.user._id}).populate('cart.id');
      user.cart.forEach((item) => {
         totalPrice += item.id.price*item.quantity;
      })
      res.send({
         id: user.cart,
         totalPrice,
         isAdmin: (req.user.role == 'admin') ? true : false
      });
   }
   catch(err) {
      next(err);
   }
}