const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const root = './';

var app = express();

// Load routes
var example_routes = require('./routes/persona-routes');

// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(root, './')));

// Config CORS and Headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Routes
app.use('/api', example_routes);

app.get('*', (req, res) => {
    res.sendFile('./index.html', {root: root});
  });

module.exports = app;