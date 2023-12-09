const path=require('path');
module.exports={
    login:(req, res)=>{
        res.render(path.resolve(__dirname,'../views/auth/login.ejs'))
    },
    doLogin: (req,res)=>res.send("Hacer un login"),
    register:(req, res)=>{
        res.render(path.resolve(__dirname,'../views/auth/register.ejs'))
    },
    doRegister: (req,res)=>res.send("Hacer un registro"),
    logout: (req,res)=>res.send("Cierra sesion del usuario"),
}