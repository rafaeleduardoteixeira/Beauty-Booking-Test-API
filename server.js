const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// CORS primeiro
server.use(cors());
// Middlewares do json-server (logger, static, etc.)
server.use(middlewares);
// Body parser
server.use(jsonServer.bodyParser);

// Rotas do db.json
server.use(router);

// Railway injeta process.env.PORT
const PORT = process.env.PORT || 3000;
// IMPORTANTE: bind em 0.0.0.0
server.listen(PORT, '0.0.0.0', () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
