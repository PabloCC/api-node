const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Persona = Schema({
    name: String,
    description: String,
});

module.exports = mongoose.model('Persona', Persona);