'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chama = sequelize.define('Chama', {
    country: DataTypes.STRING,
    name: DataTypes.STRING,
    loan: DataTypes.STRING,
    riskApetite: DataTypes.INTEGER
  }, {});
  Chama.associate = function(models) {
    // associations can be defined here
  };
  return Chama;
};