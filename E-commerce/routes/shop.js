const path = require('path');
const express = require('express')
const router = express.Router();

const shopController = require('../controllers/shop')

router.get('/', shopController.getHome);
router.get('/products/all', shopController.getProductAll);

router.get('/product/:id', shopController.getProductDetails)
router.get('/cart/', shopController.getCart);
router.get('/cart/add/:id', shopController.getAddToCart)
router.get('/cart/increase/:id', shopController.getIncreaseCart)
router.get('/cart/decrease/:id', shopController.getDecreaseCart)

module.exports = router;