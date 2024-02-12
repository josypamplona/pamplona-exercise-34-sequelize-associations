const express = require('express');
const {
    getAllPatientsPlans,
  } = require('./controller/patientsControler');
  
const app = express();
app.use(express.json());

// Não remova a linha abaixo, pois pode causar problema nos testes
app.get('/', (_req, res) => res.send('ok'));
app.get('/patients/plans', getAllPatientsPlans);

module.exports = app;