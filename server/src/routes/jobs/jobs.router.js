const express = require('express');

const {
  httpAddNewLaunch,
  httpUpdateJobById,
  httpGetJobById,
} = require('./jobs.controller');

const jobsRouter = express.Router();

jobsRouter.post('/new', httpAddNewLaunch);
jobsRouter.post('/:id', httpUpdateJobById);
jobsRouter.get('/:id', httpGetJobById);

module.exports = jobsRouter;
