const express = require('express');
const sequelize = require('./config/database');

const productosRoutes = require('./routes/productos');
const categoriasRoutes = require('./routes/categorias');
const estadosRoutes = require('./routes/estados');
const usuariosRoutes = require('./routes/usuarios');
const ordenesRoutes = require('./routes/orden');

const app = express();

app.use(express.json());

app.use('/api/productos', productosRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/estados', estadosRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/orden', ordenesRoutes);

sequelize.sync({ force: false }) // Cambia a true si quieres que sobrescriba las tablas existentes
    .then(() => {
        console.log('Tablas sincronizadas');
    })
    .catch(err => {
        console.error('Error al sincronizar las tablas:', err);
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});