const User = require('./../../db').user;
// const Login = require('./../../db').login;

module.exports = (req, res) => {
  let response;
  try {
    User.create(req.body)
      .then(() => {
        res.status(200).send({
          success: true,
          body: {},
        });
      })
      .catch(e => {
        console.log(e.sql, e.name, e.original);
        res.status(400).send({
          success: false,
          errno: e.original.errno,
          message: e.original.sqlMessage || 'Something went wrong 67!',
          body: {},
        });
      });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: 'Something went wrong',
      body: {},
    });
  }
}
