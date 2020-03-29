const express = require('express');

const cors = require('cors');

const routes = require('./routes');//importando as rotas

const app = express();//criando a aplicação

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);//porta


/** 
 * Métodos HTTP
 * 
 * GET: buscar informação no backend
 * POST: criar uma informação no backend
 * PUT: alterar ...
 * DELETE: deletar ...
 * 
 */

/**
 * Tipos de parâmetros
 * 
 * Query: parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
 * Route: parâmetros utilizados para identificar recursos
 * Request body: corpo da requisição; criar ou alterar recursos
 * 
 */

//Configuração do Banco de Dados (sqlite3)


