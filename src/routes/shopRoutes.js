/*Shop Routes:
- GET -> /shop
- GET -> /shop/item/:id
- POST -> /shop/item/:id/add
- GET -> /shop/cart
- POST -> /shop/cart*/

const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>res.send("shop"))
router.get("/item/:id",(req,res)=>res.send("shop"))
router.post("/item/:id/add",(req,res)=>res.send("shop"))
router.get("/cart",(req,res)=>res.send("shop"))
router.post("/cart*/",(req,res)=>res.send("shop"))

module.exports=router