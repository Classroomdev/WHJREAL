const express = require('express');

const { httpAddNewLaunch, httpUpdateJobById } = require('./jobs.controller');

const jobsRouter = express.Router();

jobsRouter.post('/new', httpAddNewLaunch);
jobsRouter.post('/:id', httpUpdateJobById);

module.exports = jobsRouter;
