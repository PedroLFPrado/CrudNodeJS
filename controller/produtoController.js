const Produto = require("../model/produto");

const ProdutoController = {
  async listar(req, res) {
    try {
      console.log('Tentando listar produtos...');
      const produtos = await Produto.listar();
      console.log(`Encontrados ${produtos.length} produtos`);
      res.json(produtos);
    } catch (err) {
      console.error('Erro ao listar produtos:', err.message);
      res.status(500).json({ erro: err.message });
    }
  },

  async buscarPorId(req, res) {
    try {
      const produto = await Produto.buscarPorId(req.params.codigo);
      if (!produto) return res.status(404).json({ mensagem: "Produto não encontrado" });
      res.json(produto);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  },

  async criar(req, res) {
    try {
      const { descricao, preco, qtde } = req.body;
      const novo = await Produto.criar(descricao, preco, qtde);
      res.status(201).json(novo);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  },

  async atualizar(req, res) {
    try {
      const { descricao, preco, qtde } = req.body;
      const atualizado = await Produto.atualizar(req.params.codigo, descricao, preco, qtde);
      if (!atualizado) return res.status(404).json({ mensagem: "Produto não encontrado" });
      res.json(atualizado);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  },

  async deletar(req, res) {
    try {
      const deletado = await Produto.deletar(req.params.codigo);
      res.json(deletado);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  }
};

module.exports = ProdutoController;
