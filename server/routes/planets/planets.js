const express = require('express');
const { httpGetAllPlanets } = require('../../controllers/planets');

const planetsRouter = express.Router();

planetsRouter.get('/planets', httpGetAllPlanets);

module.exports = planetsRouter;
