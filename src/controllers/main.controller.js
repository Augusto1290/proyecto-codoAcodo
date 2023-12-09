module.exports={
    home: (req, res) => res.send(__dirname + './index.html'),
    contact: (req, res) => res.send("Página de Contacto"),
    about: (req, res) => res.send("Página Sobre Nosotros"),
    faqs: (req, res) => res.send("faqs")
}