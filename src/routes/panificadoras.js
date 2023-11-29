const express = require('express');
const controllerPanificadoras = require('../controllers/panificadoras.js');
const authMiddleware = require('../middleware/auth')

const controllerPanificadora = new controllerPanificadoras();
const routerPanificadoras = express.Router();

routerPanificadoras.post('/api/login', controllerPanificadora.Login)
routerPanificadoras.get('/api/panificadora/:idPanificadora', authMiddleware, controllerPanificadora.ConsultarUm);
routerPanificadoras.get('/api/panificadora',authMiddleware, controllerPanificadora.ConsultarTodos);
routerPanificadoras.post('/api/panificadora',authMiddleware, controllerPanificadora.Create);
routerPanificadoras.put('/api/panificadora/:idPanificadora',authMiddleware, controllerPanificadora.Update);
routerPanificadoras.delete('/api/panificadora/:idPanificadora',authMiddleware,controllerPanificadora.Delete);


module.exports = routerPanificadoras
