const express = require('express');
const PersonaController = require('../controllers/persona.controller');

const api = express.Router();

api.get('/persona', PersonaController.getRequest);
api.post('/persona', PersonaController.saveExample);

module.exports = api;