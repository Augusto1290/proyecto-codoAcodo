const express = require('express');
const router = express.Router();

router.get("/login",(req,res)=>res.send("auth"))
router.post("/login",(req,res)=>res.send("auth"))
router.get("/register",(req,res)=>res.send("shop"))
router.post("/register",(req,res)=>res.send("shop"))
router.get("/logout",(req,res)=>res.send("shop"))


module.exports=router

