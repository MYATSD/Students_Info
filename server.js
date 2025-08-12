const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "data.json"));
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 5000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Optional: allow all CORS (json-server defaults already allow CORS)
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
