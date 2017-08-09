"use strict";

module.exports = function(sequelize, DataTypes) {
  var topics = sequelize.define('topics', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  topics.associate = function(models) {
    topics.hasMany(models.messages, {
      foreignKey: {
        name: 'topic_id',
        allowNull: false
      }
    });
    topics.belongsTo(models.users, {
      foreignKey: {
        name: 'created_by',
        allowNull: false
      }
    });
  };


  return topics;
};