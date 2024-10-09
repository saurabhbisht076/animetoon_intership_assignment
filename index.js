const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

// Import routes
const webtoonRoutes = require('./routes/webtoonRoutes');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

connectDB();

// Routes setup
app.use('/webtoons', webtoonRoutes);
app.use('/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});