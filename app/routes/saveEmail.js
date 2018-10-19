var express = require('express');
var router = express.Router();

const SaveEmail = require('./../controllers').SaveEmail;

router.route('/')
  .post(SaveEmail)

module.exports = router;
