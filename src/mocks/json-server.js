/* eslint no-console: 0 */
const jsonServer = require('json-server');

const server = jsonServer.create();
const accountsByTranche = require('./accounts-by-tranche.json');
const masternodes = require('./masternodes.json');
const supply = require('./supply-stats.json');
const { calculateAmountStats } = require('./calculate-amount-stats');
const { calculateAccountStats } = require('./calculate-account-stats');

const middlewares = jsonServer.defaults();
server.use(middlewares);

server.get('/amountRanking', (req, res) => {
  const { query } = req;
  query.balance = Number.parseInt(query.input, 10);

  const result = calculateAmountStats(query, accountsByTranche);
  result.type = 'amount';

  res.jsonp(result);
});

server.get('/accountRanking', (req, res) => {
  const { query } = req;
  query.balance = Math.round(1000 + Math.random() * 1000);

  const result = calculateAmountStats(query, accountsByTranche);
  result.type = 'account';
  result.account = query.input;
  result.transactions = Math.round(100 + Math.random() * 1000);

  res.jsonp(result);
});

server.get('/accountStats', (req, res) => {
  const { query } = req;

  const result = calculateAccountStats(query);

  res.jsonp(result);
});

const router = jsonServer.router({
  masternodes,
  accountsByTranche,
  supply,
  // ... add more resources ...
});

server.use(router);
server.listen(5000, () => {
  console.log('JSON Server is running');
});
