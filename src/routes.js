const express = require('express');
const router = express.Router();
const ColaboradoresController = require('./controllers/ColaboradoresController');
const ColaboradoresService = require('./services/ColaboradoresService');

//Listando todos os colaboradores
router.get('/colaboradores', ColaboradoresController.buscarTodos);

//Listando colaboradores por ID
router.get('/colaborador/:id', ColaboradoresController.buscarUm);

// Inserir colaborador
router.post('/colaborador', ColaboradoresController.inserir);

// Alterando cadastro
router.put('/colaborador/:id', ColaboradoresService.alterar);

// Alterando cadastro
router.delete('/colaborador/:id', ColaboradoresService.excluir);

module.exports = router;

