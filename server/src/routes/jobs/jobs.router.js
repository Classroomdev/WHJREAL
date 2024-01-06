const express = require('express');

const { httpAddNewLaunch } = require('./jobs.controller');

const jobsRouter = express.Router();

jobsRouter.post('/new', httpAddNewLaunch);

module.exports = jobsRouter;
