'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    password: DataTypes.STRING,
    city: DataTypes.STRING
  }, {});
  user.associate = function (models) {
    // associations can be defined here
    user.hasMany(models.login, { foreignKey: 'userId' });
    // sequelize.sync({ force: true });
  };
  return user;
};