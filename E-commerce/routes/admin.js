const path = require('path');
const express = require('express');
const router = express();

const adminController = require('../controllers/admin');
const products = require('../models/products');
router.get('/', adminController.getAdminHome);
router.get('/products/all', adminController.getProductAll)
router.get('/products/add', adminController.getProductsAdd)
router.get('/products/update/:id', adminController.getProductUpdate)
router.get('/products/delete/:id', adminController.getDeleteProduct)

router.post('/products/add', adminController.postProductsAdd)
router.post('/products/update/', adminController.postProductsUpdate)
module.exports = router