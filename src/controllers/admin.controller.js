const path=require('path');
module.exports={
    admin:(req,res)=>{
        res.render(path.resolve(__dirname,'../views/admin/admin.ejs'))
    },
    createView: (req,res)=>res.send("create"),
    createItem:(req, res)=>res.send("create"),
    editView: (req,res)=>res.send("Hacer un registro"),
    editItem: (req,res)=>res.send("Cierra sesion del usuario"),
    deleteItem: (req,res)=>res.send("Cierra sesion del usuario")
};