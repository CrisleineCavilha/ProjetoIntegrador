const express = require('express');
const routerPanificadoras = require('./src/routes/panificadoras.js');
const routerPostagens = require('./src/routes/postagens.js');

const app = express();
const porta = 3000;

app.use(express.json());
app.use(routerPanificadoras);
app.use(routerPostagens);

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta} ${process.pid}.`)
});