const User = require('./../../db').user;
// const Login = require('./../../db').login;

module.exports = (req, res) => {
  let response;
  try {
    User.create(req.body)
      .then(() => {
        res({
          success: true,
          httpStatus: 200,
          body: {},
        });
      })
      .catch(e => {
        // console.log(e.sql, e.name, e.original);
        res({
          success: false,
          httpStatus: 400,
          errno: e.original.errno,
          message: e.original.sqlMessage || 'Something went wrong 67!',
          body: {},
        });
      });
  } catch (err) {
    res({
      success: false,
      httpStatus: 400,
      errno: 'NA',
      message: 'Something went wrong',
      body: {},
    });
  }
}
