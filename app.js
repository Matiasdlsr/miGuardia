// app.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userRoutes = require('./routers/userRouters');
const adminRoutes = require('./routers/adminRouters');

const app = express();

// Configurar vistas y archivos estáticos
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

// Ruta para la página principal (raíz)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html')); // Servir index.html
});

// Rutas
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));