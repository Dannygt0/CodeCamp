// models/orden.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Orden = sequelize.define('Orden', {
  clienteId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fechaOrden: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Orden;
