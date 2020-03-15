
// Connect to Mongo
require('dotenv').config();
const mongoose = require('mongoose');
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const { MONGODB_URI, PORT } = process.env;
mongoose.connect(MONGODB_URI, mongooseOptions, () => {
  console.log('__Connected to MongoDB__');
})

// Start Express server
const server = require('./src/app');
server.start(PORT);
