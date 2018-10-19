var express = require('express');
var router = express.Router();

const Login = require('./../controllers').Login;
const Signup = require('./../controllers').Signup;

router.route('/')
  .post(Signup);

module.exports = router;
