const express = require('express');
const router = express.Router();
const controller=require('../controllers/auth.controller')
router.get("/login",controller.login)
router.post("/login", controller.doLogin)
router.get("/register",controller.register)
router.post("/register",controller.doRegister)
router.get("/logout",controller.logout)


module.exports=router

