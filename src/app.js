const express = require('express');
const itemRoutes = require('./routes/item.routes');
const errorHandler = require('./middlewares/error.middleware');

const app = express();
app.use(express.json());
app.use('/api/v1/items', itemRoutes);
app.use(errorHandler);

module.exports = app;
