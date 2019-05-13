'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fines = sequelize.define('Fines', {
    fineDate: DataTypes.STRING,
    fineCategory: DataTypes.STRING,
    fineAmount: DataTypes.INTEGER
  }, {});
  Fines.associate = function(models) {
    // associations can be defined here
  };
  return Fines;
};