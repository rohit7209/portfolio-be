"use strict";

const express = require('express');
const app = express();
const port = 8080;

var bodyParser = require("body-parser");
var cors = require('cors')

app.use(cors());
app.use(bodyParser.json());
app.use('/login', require('./app/routes/login'));

// require('./app/routes')(app);

app.listen(port, () => {
  console.log('listening on ' + port);
});
