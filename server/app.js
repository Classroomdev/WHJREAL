const path = require('path');

const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

const app = express();

app.use(morgan('combined'));

module.exports = app;
