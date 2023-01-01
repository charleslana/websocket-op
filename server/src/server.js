const cors = require('cors');
const express = require('express');
const http = require('http');
const routes = require('./routes/routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use(routes);

app.use((error, _request, response, _next) => {
  return response.status(400).json({
    message: error.message,
  });
});

app.use((_request, response) => {
  return response.status(404).json({
    message: 'Rota não encontrada',
  });
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('App running on 3000!');
});
