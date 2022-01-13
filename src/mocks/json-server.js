const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const data = require(path.join(__dirname, 'db.js'))();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(5000, () => {
  console.log('JSON Server is running');
});
