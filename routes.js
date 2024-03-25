// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Iniciando Multer
const multer = require("multer");

// Recebendo arquivo do multer que criamos
const config = require('./src/config/multer');



// Importando os Controllers
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro');

// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.post('/', home.pagInicialPost);

route.get('/aluno', cadastro.aluno);
route.post('/aluno', multer(config).single('foto'), cadastro.alunoInsert); // Cadastro de aluno irá receber um arquivo com o "name" do HTML chamado de "foto"

route.get('/sala', cadastro.sala);
route.post('/sala', cadastro.salaInsert);

module.exports = route;