const User = require('./../../db').user;
// const Login = require('./../../db').login;
const respondFailure = (res, e) => {
  res({
    success: false,
    httpStatus: 400,
    errno: (e.original || {}).errno || 'NA',
    message: (e.original || {}).sqlMessage || 'Something went wrong 67!',
    body: {},
  });
}

module.exports = (req, res) => {
  try {
    User.create(req.body)
      .then(user => {
        user.createLogin({
          status: 'logged in',
          token: req.body.token,
        })
          .then(() => {
            console.log('Worked!')
            res({
              success: true,
              httpStatus: 200,
              body: {},
            });
          })
          .catch((e) => respondFailure(res, e));
      })
      .catch((e) => respondFailure(res, e));
  } catch (err) {
    respondFailure(res, e);
  }
}
