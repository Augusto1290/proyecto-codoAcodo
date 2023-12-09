const path=require('path');
module.exports={
    home: (req, res) => {
        res.render(path.resolve(__dirname,'../views/admin/admin.ejs'),{
            title:"Home"
        });
    },
    contact: (req, res) => res.send("Página de Contacto"),
    about: (req, res) => res.send("Página Sobre Nosotros"),
    faqs: (req, res) => res.send("faqs")
}