'use strict';
module.exports = (sequelize, DataTypes) => {
  const Goal = sequelize.define('Goal', {
    name: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    riskRankingr: DataTypes.INTEGER
  }, {});
  Goal.associate = function(models) {
    // associations can be defined here
  };
  return Goal;
};