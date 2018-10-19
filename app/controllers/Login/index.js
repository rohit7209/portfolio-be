'use strict';
const User = require('./../../db').user;

const Authenticate = require('./../../utils/Authenticate');

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
          token: Authenticate.createToken({ id: user.id }),
        })
          .then((login) => {
            res({
              success: true,
              httpStatus: 200,
              body: {
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                phone: user.phone,
                sex: user.sex,
                city: user.city,
                token: login.token,
              },
            });
          })
          .catch((e) => respondFailure(res, e));
      })
      .catch((e) => respondFailure(res, e));
  } catch (e) {
    respondFailure(res, e);
  }
}
