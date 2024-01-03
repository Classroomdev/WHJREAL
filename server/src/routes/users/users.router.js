const express = require('express');

const { httpGetUserById } = require('./users.controller');

const usersRouter = express.Router();

usersRouter.get('/:id', httpGetUserById);

module.exports = usersRouter;
