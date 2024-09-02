import { Sequelize } from '@sequelize/core';
import { MsSqlDialect} from '@sequelize/mssql';

const sequelize = new Sequelize({
  dialect: "mssql",
  server: 'localhost',
  port: 1433,
  database: 'proyecto',
  authentication: {
    type: 'default',
    options: {
      userName: 'ejemplo',
      password: '123456789',
    },
  },
});