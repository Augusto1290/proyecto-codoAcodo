const express = require('express');
const app = express();

const port = 3004;

const mainRoutes = require('./src/routes/mainRoutes.js')
const shopRoutes = require('./src/routes/shopRoutes.js')
const adminRoutes = require('./src/routes/adminRoutes.js')
const authRoutes = require('./src/routes/authRoutes.js')

app.use(express.static('public'));

app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => {
 console.log(`Servidor corriendo en http://localhost:${port}`);
});

