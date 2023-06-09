const path=require('path');
const express=require('express');
const shopController=require('../controllers/shop');
const router=express.Router();
router.get('/',shopController.getIndex);
router.get('/products/:productId',shopController.getProducts);
router.get('/cart',shopController.getCart);
router.get('/orders',shopController.getorders);
router.get('/checkout',shopController.getCheckout);