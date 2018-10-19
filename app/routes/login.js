var express = require('express');
var router = express.Router();

const Login = require('./../controllers').Login;

router.route('/')
  .post(Login)

module.exports = router;
