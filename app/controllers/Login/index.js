const User = require('./../../db').user;

// const Login = require('./../../db').login;

const respondFailure = (res, e) => {
  res({
    success: false,
    httpStatus: e.httpStatus || 400,
    errno: (e.original || {}).errno || 'NA',
    message: (e.original || {}).sqlMessage || e.message || 'Something went wrong!',
    body: {},
  });
}

module.exports = (req, res) => {
  try {
    User.find({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
      attributes: ['id', 'firstname', 'lastname', 'email', 'phone', 'sex', 'city'],
    })
      .then(function (user) {
        if (!user) respondFailure(res, { message: 'Wrong email/password!', httpStatus: 200 });
        else user.createLogin({
          status: 'logged in',
          token: 'wuteu23764ctyrw78hbe7823eqe',
        })
          .then(() => {
            res({
              success: true,
              httpStatus: 200,
              body: user,
            });
          })
          .catch((e) => respondFailure(res, e));
      })
      .catch((e) => respondFailure(res, e));
  } catch (e) {
    respondFailure(res, e);
  }
}
