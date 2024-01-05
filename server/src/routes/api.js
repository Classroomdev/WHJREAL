const express = require('express');

const usersRouter = require('./users/users.router');
const jobsRouter = require('./jobs/jobs.router');

const api = express.Router();

api.use('/users', usersRouter);
api.use('/jobs', jobsRouter);

module.exports = api;
