/*Shop Routes:
- GET -> /shop
- GET -> /shop/item/:id
- POST -> /shop/item/:id/add
- GET -> /shop/cart
- POST -> /shop/cart*/

const express = require('express');
const router = express.Router();

const controller=require('../controllers/shop.controller')

router.get("/",controller.shop)
router.get("/item/:id", controller.item)
router.post("/item/:id/add", controller.addItem)
router.get("/cart", controller.cart)
router.post("/cart*/", controller.addToCart)

module.exports=router