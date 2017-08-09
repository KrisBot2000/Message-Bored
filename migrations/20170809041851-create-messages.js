'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      body: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      author_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'cascade',
        references: { model: 'users', key: 'id' }
      },
      topic_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'cascade',
        references: { model: 'topics', key: 'id' }
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Messages');
  }
};