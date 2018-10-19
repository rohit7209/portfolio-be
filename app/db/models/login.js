'use strict';
module.exports = (sequelize, DataTypes) => {
  const login = sequelize.define('login', {
    userId: DataTypes.INTEGER,
    token: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {});
  login.associate = function (models) {
    // associations can be defined here
    login.belongsTo(models.user, { foreignKey: 'userId' });
  };
  return login;
};