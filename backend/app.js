const express = require('express');
const connectDB = require('./config/database');
const searchRoutes = require('./routes/searchRoutes');
const cors = require('cors');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api', searchRoutes);

module.exports = app;
