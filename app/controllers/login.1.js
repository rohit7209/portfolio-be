const User = require('./../db').user;
const Login = require('./../db').login;

module.exports = (req, res) => {

  // console.log('users::::', User.findAll());
  // User.findAll({
  //   include: [Login]
  // }).then(users => {

  //   console.log('users::', users[0].logins);
  // });

  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: 'email@email.com',
  }).then(user => {
    user.createLogin({
      status: req.body.status,
      token: 'initial token',
    }).then(() => console.log('Worked!'));
  });


  // const user = require('./../../db/models/login')({
  //   firstname: req.body.firstname,
  //   lastname: req.body.lastname,
  // });
  res.send(JSON.stringify(User));
}