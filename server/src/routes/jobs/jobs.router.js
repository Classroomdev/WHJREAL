const express = require('express');

const {
  httpAddNewJob,
  httpUpdateJobById,
  httpGetJobById,
  httpGetAllJobs,
  httpGetFeaturedJobs,
} = require('./jobs.controller');

const jobsRouter = express.Router();

jobsRouter.get('/all', httpGetAllJobs);
jobsRouter.get('/featured', httpGetFeaturedJobs);
jobsRouter.post('/new', httpAddNewJob);
jobsRouter.post('/:id', httpUpdateJobById);
jobsRouter.get('/:id', httpGetJobById);

module.exports = jobsRouter;
