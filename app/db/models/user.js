'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    phone: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    password: DataTypes.STRING,
    city: DataTypes.STRING
  },
    {
      // indexes: [
      //   {
      //     unique: true,
      //     fields: ['email']
      //   }
      // ]
    });
  user.associate = function (models) {
    // associations can be defined here
    user.hasMany(models.login);
  };
  return user;
};