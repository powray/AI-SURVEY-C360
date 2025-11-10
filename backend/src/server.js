const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { port, mongoUri } = require('./config');

const authRoutes = require('./routes/auth');
const surveyRoutes = require('./routes/survey');
const chatRoutes = require('./routes/chat');
const c360Routes = require('./routes/c360');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/survey', surveyRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/c360', c360Routes);

mongoose.connect(mongoUri).then(() => console.log('Mongo connected')).catch(err => console.error(err));

app.listen(port, () => console.log(`Server running on port ${port}`));
