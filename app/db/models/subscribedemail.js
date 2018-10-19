'use strict';
module.exports = (sequelize, DataTypes) => {
  const subscribedEmail = sequelize.define('subscribedEmail', {
    email: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  subscribedEmail.associate = function(models) {
    // associations can be defined here
  };
  return subscribedEmail;
};