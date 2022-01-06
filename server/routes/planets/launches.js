const express = require('express');
const { httpGetAllLaunches, httpAddNewLaunch } = require('../../controllers/launches')

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch)

module.exports = launchesRouter;
