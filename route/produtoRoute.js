const express = require("express");
const router = express.Router();
const ProdutoController = require("../controller/produtoController");

router.get("/", ProdutoController.listar);
router.get("/:codigo", ProdutoController.buscarPorId);
router.post("/", ProdutoController.criar);
router.put("/:codigo", ProdutoController.atualizar);
router.delete("/:codigo", ProdutoController.deletar);

module.exports = router;
