module.exports = (app) => {
  app.post('/login', require('./controllers/Login'));

}