const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Rotas
const produtoRoute = require("./route/produtoRoute");
app.use("/produtos", produtoRoute);


app.get('/', (req,res) => {
  res.send('Rodando na porta 3000');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
