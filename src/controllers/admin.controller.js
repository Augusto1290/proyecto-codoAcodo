const path=require('path');
module.exports={
    admin:(req,res)=>{
        res.render(path.resolve(__dirname,'../views/admin/admin.ejs'),{
            title:"Administrador"
        })
    },
    createView: (req,res)=>{
        res.render(path.resolve(__dirname,'../views/admin/create.ejs'),{
            title:"Crear"
        })
    },
    createItem:(req, res)=>res.send("create"),
    editView: (req,res)=>{
        res.render(path.resolve(__dirname,'../views/admin/edit.ejs'),{
            title:"Editar"
        })
    },
    editItem: (req,res)=>res.send("Cierra sesion del usuario"),
    deleteItem: (req,res)=>res.send("Cierra sesion del usuario")
};