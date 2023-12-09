const path=require('path');
module.exports={
    shop: (req, res)=>{
        res.render(path.resolve(__dirname,'../views/shop/shop.ejs'))
    },
    item:(req, res)=>{
        res.render(path.resolve(__dirname,'../views/shop/item.ejs'))
    },
    cart:(req, res)=>{
        res.render(path.resolve(__dirname,'../views/shop/cart.ejs'))
    },

    addItem:(req,res)=>res.send("Esta es la vista que agrega un  NUEVO ITEM"),
    addToCart:(req,res)=>res.send("Esta es la vista que agrega un item al carrito ")
    
}