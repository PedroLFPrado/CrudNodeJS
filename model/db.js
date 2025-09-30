const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "10.114.65.173",   // IP da máquina do banco (onde está o PostgreSQL)
  database: "TOCC8",
  password: "ifsp",
  port: 5432,
});

module.exports = pool;
