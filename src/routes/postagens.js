const express = require('express');
const controllerPostagens = require('../controllers/postagens.js');
const authMiddleware = require('../middleware/auth.js');

const controllerPostagem = new controllerPostagens();
const routerPostagens = express.Router();

routerPostagens.get('/api/postagens/:idPostagem', authMiddleware, controllerPostagem.ConsultarUm);
routerPostagens.get('/api/postagens', authMiddleware, controllerPostagem.ConsultarTodos);
routerPostagens.post('/api/postagens',authMiddleware, controllerPostagem.Create);
routerPostagens.put('/api/postagens/:idPostagem', authMiddleware, controllerPostagem.Update);
routerPostagens.delete('/api/postagens/:idPostagem',authMiddleware, controllerPostagem.Delete);

module.exports = routerPostagens