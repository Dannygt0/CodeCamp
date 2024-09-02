// models/categoriaProducto.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const CategoriaProducto = sequelize.define('CategoriaProducto', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = CategoriaProducto;
