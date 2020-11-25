'use strict'

const mongoose = require('mongoose');
const Studios = mongoose.model('Categories');

exports.get = async() => {
    const res = await Studios.find({}, 
        "title description");
    
    return res;
}