const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize, Model, DataTypes, ConnectionRefusedError, DATE, DATEONLY } = require('sequelize');
const Op = Sequelize.Op;
let async = require("async");
const e = require('express');
// const errorHandler = require('_middleware/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, OPTIONS, DELETE, GET');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', "*");
    next();
  });
  
  app.use(function returnOps(req, res, next) {
    if (req.method === 'OPTIONS') return res.status(200).send('OK').end();
    next();
  });

  app.use(require('./API/routes'));


// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));