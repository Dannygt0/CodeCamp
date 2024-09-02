// models/estado.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Estado = sequelize.define('Estado', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Estado;
