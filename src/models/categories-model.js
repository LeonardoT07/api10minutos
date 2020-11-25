'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
*   o Schame cria automaticamente o ID
*
*   type: tipo do campo; 
*   required: se é obrigatorio; 
*   trim: remover os espaços antes e depois do valor
*   unique: se o valor é unico na tabela
*/
const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    thumbnail: {
        type: String,

    },
    episodes: [
        {
            title: {type: String, required: true, trim: true},
            description: {type: String, required: true, trim: true},
            thumbnail: {type: String, required: true, trim: true},
            link_watch: {type: String, required: true, trim: true, unique: true},
            ativo: {type: Boolean, required: true, default: true}
        }
    ],
});

module.exports = mongoose.model('Categories', schema);