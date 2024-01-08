const express = require('express');

const {
  httpAddNewLaunch,
  httpUpdateJobById,
  httpGetJobById,
  httpGetAllJobs,
} = require('./jobs.controller');

const jobsRouter = express.Router();

jobsRouter.get('/all', httpGetAllJobs);
jobsRouter.post('/new', httpAddNewLaunch);
jobsRouter.post('/:id', httpUpdateJobById);
jobsRouter.get('/:id', httpGetJobById);

module.exports = jobsRouter;
