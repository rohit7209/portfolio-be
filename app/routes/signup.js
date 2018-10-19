var express = require('express');
var router = express.Router();

const Signup = require('./../controllers').Signup;

router.route('/')
  .post(Signup);

module.exports = router;
