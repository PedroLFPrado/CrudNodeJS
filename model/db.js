const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",   // ou IP da máquina do banco
  database: "TOCC8",
  password: "ifsp",
  port: 5432,
});

module.exports = pool;
