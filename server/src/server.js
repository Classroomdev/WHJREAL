const http = require('http');

require('dotenv').config();

const app = require('./app');
const { mongoConnect } = require('./services/mongo');

const server = http.createServer(app);

const PORT = process.env.PORT || 8080;

async function startServer() {
  await mongoConnect();
  server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  });
}

startServer();
