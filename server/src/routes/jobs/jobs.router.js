const express = require('express');

const { httpAddNewLaunch } = require('./jobs.controller');

const jobsRouter = express.Router();

jobsRouter.post('/', httpAddNewLaunch);

module.exports = jobsRouter;
