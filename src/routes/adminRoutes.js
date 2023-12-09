const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>res.send("admin"))
router.get("/create",(req,res)=>res.send("adminCreate"))
router.post("/create",(req,res)=>res.send("admin create post"))
router.get("/edit/:id",(req,res)=>res.send("admin id"))
router.put("/edit/:id/",(req,res)=>res.send("admin put"))
router.delete("/delete/:id/",(req,res)=>res.send("admin delet"))

module.exports=router

