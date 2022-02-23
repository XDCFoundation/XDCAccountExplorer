/* eslint no-console: 0 */
const jsonServer = require('json-server');

const server = jsonServer.create();
const accountStats = require('./account-stats.json');
const { calculateAmountStats } = require('./calculate-amount-stats');

const middlewares = jsonServer.defaults();
server.use(middlewares);

server.get('/amountRanking', (req, res) => {
  const { query } = req;
  query.balance = Number.parseInt(query.input, 10);

  const result = calculateAmountStats(query);
  result.type = 'amount';

  res.jsonp(result);
});

server.get('/accountRanking', (req, res) => {
  const { query } = req;
  query.balance = Math.round(10000000 + Math.random() * 10000000);

  const result = calculateAmountStats(query);
  result.type = 'account';
  result.account = query.input;
  result.transactions = Math.round(100 + Math.random() * 1000);

  res.jsonp(result);
});

const router = jsonServer.router({
  accountStats,
  // ... add more resources ...
});
server.use(router);

server.listen(5000, () => {
  console.log('JSON Server is running');
});
