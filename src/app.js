'use strict';

const express = require('express'); //para utillizar o MVC 
const bodyParser = require('body-parser'); // auxilia a converter o corpo da requisição em JSON
const mongoose = require('mongoose'); // pacote para o gerenciamento do banco 
const config = require('./config');
const cors = require('cors');

const app = express(); // constante para a aplicação
const router = express.Router(); // constante para a criação de rotas

// Conexão com o Banco
mongoose.connect(config.connectionString, {useNewUrlParser: true, useUnifiedTopology: true });

// Carregar os Models
const Categories = require('./models/categories-model');

// Carregar as rotas
const indexRoute = require('./routes/index-routes');
const categoriesRoute = require('./routes/categories-routes');

// tamanho máximo de envio do arquivo JSON
app.use(bodyParser.json({
    limit: '10mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

// Usando a rota com prefixo '/' da constante route
app.use('/', indexRoute);
app.use('/categories', categoriesRoute);

// exportar o arquivo através do require
module.exports = app;