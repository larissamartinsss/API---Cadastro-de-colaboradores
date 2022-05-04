const express = require('express');
const res = require('express/lib/response');
const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) =>{
            db.query('SELECT * FROM colaboradores', (error, results) => {
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    },
     buscarUm: (id) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM colaboradores WHERE id = ?', [id], (error, results) => {
                if(error) {rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });   
     },

     inserir: (nome, email, setor) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('INSERT INTO colaboradores (nome, email, setor) VALUES(?,?, ?)', 
                [nome, email, setor], 
                (error, results) => {
                    if(error) {rejeitado(error); return;}
                    aceito(results.inserir);
            });
        });   
     },

     alterar: (id, nome, email, setor) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('UPDATE colaboradores SET nome = ?, email= ?, setor=? WHERE id = ?', 
                [nome, email, id, setor], 
                (error, results) => {
                    if(error) {rejeitado(error); return;}
                    aceito(results);
            });
        });   
     },

     excluir: (id) => {
        return new Promise((aceito, rejeitado) =>{
            db.query('DELETE FROM colaboradores WHERE id = ?', [id], (error, results) => {
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    }
};