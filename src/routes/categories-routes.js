'use strict' //força o js a ser muito mais criterioso com o 

const express = require('express'); //para utillizar o MVC 
const router = express.Router(); // constante para a criação de rotas
const controller = require('../controller/categories-controller'); // constante para o controller
//const authService = require('../services/auth-service');

router.get('/', controller.get);

module.exports = router;