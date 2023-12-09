const express = require('express');
const router = express.Router();

const controller=require('../controllers/admin.controller')

router.get("/",controller.admin)
router.get("/create",controller.createView)
router.post("/create",controller.createItem)
router.get("/edit/:id",controller.editView)
router.put("/edit/:id/",controller.editItem)
router.delete("/delete/:id/",controller.deleteItem)

module.exports=router

