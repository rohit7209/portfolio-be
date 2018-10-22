'use strict';

const express = require('express');
const app = express();
const port = 8080;

var bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors());
app.use(bodyParser.json());
app.use('/api/login', require('./app/routes/login'));
app.use('/api/signup', require('./app/routes/signup'));
app.use('/api/saveEmail', require('./app/routes/saveEmail'));

// require('./app/routes')(app);

app.listen(port, () => {
  console.log('listening on ' + port);
});
