'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    nationalId: DataTypes.STRING,
    email: DataTypes.STRING,
    userStatus: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Chama)
    User.hasMany(models.Contributions)
    User.hasMany(models.Fines)
    User.hasMany(models.Loans)
    User.hasMany(models.Withdrawals)

  };

  return User;
};