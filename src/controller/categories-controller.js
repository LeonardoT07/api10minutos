'use strict';

// Exportação do modelo para uso
const repository = require('../repositories/categories-repository');

// Controlers de GET
exports.get = async(req, res, next) => {
    try{
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: "Falha ao processar sua requisição"
        });
    }
}