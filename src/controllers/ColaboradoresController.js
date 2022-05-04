const { json } = require('express/lib/response');
const ColaboradoresService = require('../services/ColaboradoresService');

module.exports = {
    //Listar todos colaboradores
    buscarTodos: async (req, res) => {
        let json = {error: '', result: []};

        let colaboradores = await ColaboradoresService.buscarTodos();
    
// Percorrer por cada colaborador:
    for(let i in colaboradores) {
        json.result.push({
            id: colaboradores[i].id,
            nome: colaboradores[i].nome,
            email: colaboradores[i].email,
            setor: colaboradores[i].setor
            });
        }
        res.json(json);
        res.sendStatus(200);
    },
// Buscar individualmente
    buscarUm: async(req, res) => {
        let json = {error: '', result: []};

        let id = req.params.id;
        let colaborador = await ColaboradoresService.buscarUm(id);

        if(colaborador){
            json.result = colaborador;
        }
        res.json(json);
   
    },
    // Inserir colaboradores
    inserir: async(req, res) => {
        let json = {error: '', result: []};

        let nome = req.body.nome;
        let email = req.body.email;
        let setor = req.body.setor;


        if(nome && email && setor){
            let colaboradorId = await ColaboradoresService.inserir(nome, email, setor);
            json.result = {
                id: colaboradorId,
                nome, 
                email,
                setor
            };
            res.sendStatus(201);         
        }else{
            json.error = 'Campos não enviados';
            res.sendStatus(401);  
        }
        res.json(json);
    },
    // Inserir colaboradores
    alterar: async(req, res) => {
        let json = {error: '', result: []};
        let id = req.params.id;
        let nome = req.body.nome;
        let email = req.body.email;

        if(id && nome && email){
           await ColaboradoresService.alterar(id, nome, email, setor);
            json.result = {
                id,
                nome, 
                email,
                setor
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
// Remover colaboradores
    excluir: async(req, res) => {
        let json = {error: '', result: []};
        
        await ColaboradoresService.excluir(req.params.id);
        res.json(json);
    }

}