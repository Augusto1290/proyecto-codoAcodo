const path=require('path');
module.exports={
    shop: (req, res)=>{
        res.render(path.resolve(__dirname,'../views/shop/shop.ejs'),{
            title:"Tienda"
        })
    },
    item:(req, res)=>{
        res.render(path.resolve(__dirname,'../views/shop/item.ejs'),{
            title:"Item"
        })
    },
    cart:(req, res)=>{
        res.render(path.resolve(__dirname,'../views/shop/cart.ejs'),{
            title:"Carrito"
        })
    },

    addItem:(req,res)=>res.send("Esta es la vista que agrega un  NUEVO ITEM"),
    addToCart:(req,res)=>res.send("Esta es la vista que agrega un item al carrito ")
    
}