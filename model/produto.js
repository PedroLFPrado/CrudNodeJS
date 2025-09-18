const pool = require("./db");

const Produto = {
  async listar() {
    const result = await pool.query("SELECT * FROM produto ORDER BY codigo");
    return result.rows;
  },

  async buscarPorId(codigo) {
    const result = await pool.query("SELECT * FROM produto WHERE codigo = $1", [codigo]);
    return result.rows[0];
  },

  async criar(descricao, preco, qtde) {
    const result = await pool.query(
      "INSERT INTO produto (descricao, preco, qtde) VALUES ($1, $2, $3) RETURNING *",
      [descricao, preco, qtde]
    );
    return result.rows[0];
  },

  async atualizar(codigo, descricao, preco, qtde) {
    const result = await pool.query(
      "UPDATE produto SET descricao=$1, preco=$2, qtde=$3 WHERE codigo=$4 RETURNING *",
      [descricao, preco, qtde, codigo]
    );
    return result.rows[0];
  },

  async deletar(codigo) {
    await pool.query("DELETE FROM produto WHERE codigo=$1", [codigo]);
    return { mensagem: "Produto deletado com sucesso" };
  }
};

module.exports = Produto;
