require('../mongo').connect();
const Persona = require('../models/persona.model');

function getRequest(req, res) {
    Persona.find().exec((err, response) => {
        if(err) return res.status(500).send({message: 'Error en la petición'});

        if(!response) return res.status(404).send({message: 'No se encontro el recurso'});

        return res.status(200).send({response});
    })
}

function saveExample(req, res){
    var params = req.body;
    var example = new Persona();
  
    if(params.name && params.description){
      example.name = params.name;
      example.description = params.description;
  
      example.save((err, exampleStored) => {
        if (err) return  res.status(500).send({message: 'No se ha podido enviar la petición'});
  
        if (!exampleStored) return res.status(404).send({message: 'El recurso no se ha guardado'});
  
        return res.status(200).send({role: exampleStored});
      });
    }else{
      return res.status(200).send({message: 'Rellena todos los datos!'});
    }
  }

module.exports = {
    getRequest,
    saveExample
}