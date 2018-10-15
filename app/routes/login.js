var express = require('express');
var router = express.Router();

router.route('/').post(require('./../controllers/Login'));

module.exports = router;
