const User = require('./../../db').user;
const Authenticate = require('./../../utils/Authenticate');

// const Login = require('./../../db').login;

const respondFailure = (res, e) => {
  res({
    success: false,
    httpStatus: 400,
    errno: (e.original || {}).errno || 'NA',
    message: (e.original || {}).sqlMessage || 'Something went wrong!',
    body: {},
  });
}

module.exports = (req, res) => {
  try {
    User.create(req.body)
      .then(user => {
        user.createLogin({
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
  } catch (err) {
    respondFailure(res, err);
  }
}
