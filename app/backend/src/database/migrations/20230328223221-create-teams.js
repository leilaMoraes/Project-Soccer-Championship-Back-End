'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teams', { 
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teamName: {
        allowNull: false,
        field: 'team_name',
        type: Sequelize.STRING
      }
      });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('teams');
  }
};
