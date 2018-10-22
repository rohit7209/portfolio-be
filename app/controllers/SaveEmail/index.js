const SubscribedEmail = require('./../../db').subscribedEmail;

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
    SubscribedEmail.findOrCreate({
      where: {
        status: 'active',
        email: req.body.email,
      },
      defaults: {
        status: 'active',
        email: req.body.email,
      },
    }).then((email) => {
      res({
        success: email[1],
        message: email[1] ? 'Email added successfully!' : 'Email already exist',
        httpStatus: 200,
        body: email[0],
      });
    })
      .catch((e) => respondFailure(res, e));
  } catch (err) {
    respondFailure(res, err);
  }
}
