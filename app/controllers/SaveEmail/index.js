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
    setTimeout(() => {
      SubscribedEmail.create({
        status: 'active',
        email: req.body.email,
      })
        .then((email) => {
          res({
            success: true,
            httpStatus: 200,
            body: email,
          });
        })
        .catch((e) => respondFailure(res, e));
    }, 5000);
  } catch (err) {
    respondFailure(res, err);
  }
}
