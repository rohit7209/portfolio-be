'use strict';
module.exports = (sequelize, DataTypes) => {
  const login = sequelize.define('login', {
    userId: DataTypes.STRING,
    token: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {});
  login.associate = function (models) {
    // associations can be defined here
    login.belongsTo(models.user);
  };
  return login;
};