const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const apiKeyRoutes = require('./routes/apiKeys');
const brokerRoutes = require('./routes/broker');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/keys', apiKeyRoutes);
app.use('/api/broker', brokerRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));