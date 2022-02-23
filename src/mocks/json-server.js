/* eslint no-console: 0 */
const jsonServer = require('json-server');

const server = jsonServer.create();
const accountStats = require('./account-stats.json');
const accountsByTranche = require('./accounts-by-tranche.json');
const masternodes = require('./masternodes.json');

const router = jsonServer.router({
  accountStats,
  masternodes,
  accountsByTranche,
  // ... add more resources ...
});
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(5000, () => {
  console.log('JSON Server is running');
});
