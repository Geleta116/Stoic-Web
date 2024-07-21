// const mysql = require("mysql2/promise");
// require('dotenv').config();

// const dbConfig = {
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// };

// async function createTable() {
//   const connection = await mysql.createConnection(dbConfig);

//   const dropTableSQL = `DROP TABLE IF EXISTS quotes;`;
//   const createTableSQL = `
//     CREATE TABLE quotes (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       quote TEXT NOT NULL,
//       author VARCHAR(255) NOT NULL,
//       imgLink VARCHAR(255),
//       UNIQUE KEY unique_quote (quote)
//     );
//   `;

//   try {
//     await connection.execute(dropTableSQL);
//     console.log("Table 'quotes' dropped if it existed.");
//     await connection.execute(createTableSQL);
//     console.log("Table 'quotes' created.");
//   } catch (error) {
//     console.error("Error creating table:", error);
//   } finally {
//     await connection.end();
//   }
// }

// module.exports= {createTable, dbConfig}

import Sequelize from "sequelize";

export default class DatabaseServices {
  constructor() {
    this.sequelize = null;
  }

  async initDatabase(database, username, password, host, port, dialect) {
    this.sequelize = new Sequelize(database, username, password, {
      host: host,
      port: port,
      dialect: dialect,
      logging: false,
    });

    return this.sequelize;
  }
}

