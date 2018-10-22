'use strict'
const fs = require('fs');
const path = require('path');

const controllers = {};
const controllersPath = path.join(__dirname, '');

fs.readdirSync(controllersPath)
  .filter(dir => fs.statSync(path.join(controllersPath, dir)).isDirectory())
  .forEach(dir => {
    controllers[dir] = (req, res) => require(path.join(controllersPath, dir))(req, (response) => {
      if (response.success) res.status(response.httpStatus || 200).send({
        success: true,
        message: response.message || 'Request successful',
        data: response.body,
      });
      else res.status(response.httpStatus || 400).send({
        success: false,
        errno: response.errno || 400,
        message: response.message || 'something went wrong!',
        body: {},
      });
    });
  });

// console.log('controllers:', controllers);

module.exports = controllers;