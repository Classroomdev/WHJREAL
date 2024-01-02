const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
  console.log('Mongo connection ready');
}

module.exports = {
  mongoConnect,
};
