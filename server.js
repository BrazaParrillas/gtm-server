const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.post('/', (req, res) => {
  console.log('Evento recebido:', req.body);
  res.status(200).send('OK');
});

app.get('/', (req, res) => {
  res.send('Servidor GTM Server-Side ativo');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
