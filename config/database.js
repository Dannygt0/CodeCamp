require('dotenv').config();
const { Sequelize } = require('@sequelize/core');

const sequelize = new Sequelize({
  database: 'proyecto', // Nombre de la base de datos
  username: 'ejemplo', // Usuario
  password: '123456789', // Contraseña
  host: 'localhost', // Host
  port: 1433, // Puerto
  dialect: 'mssql', // Dialecto para SQL Server
  dialectOptions: {
    encrypt: true, // Usa cifrado si es necesario
    trustServerCertificate: true, // Confía en el certificado del servidor
  },
  logging: false, // Puedes activar el logging si necesitas ver las consultas SQL
});

module.exports = sequelize;
