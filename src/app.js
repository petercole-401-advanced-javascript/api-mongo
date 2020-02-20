
// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require('./middleware/error.js');
const notFound = require('./middleware/404.js');

// Models
// Add my previous mongo models ? ? ?
const Model = require('./models/mongo-model.js');
const model = new Model();

// Prepare the express app
const app = express();

let isRunning = false;

//catch alls
const memesRouter = require('./api/memesRouter')
app.use(memesRouter)

const internalServerErrorHandler = require('./middleswares/internalServerErrorHandler.js')

app.get('/this_will_error', (req, res) => {
  throw new Error('errorrrrrs here')
})

module.exports = {
  server: app,
  start: function(port){
    if (isRunning = true){
    app.listen(port);
    console.log('server on port', PORT, '...')
    } else {
      console.error('server is already running!');
    }
  }
}
