'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dietPlans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      photo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      diet_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      day1: {
        type: Sequelize.STRING,
        allowNull: false
      },
      day2: {
        type: Sequelize.STRING,
        allowNull: false
      },
      day3: {
        type: Sequelize.STRING,
        allowNull: false
      },
      day4: {
        type: Sequelize.STRING,
        allowNull: false
      },
      day5: {
        type: Sequelize.STRING,
        allowNull: false
      },
      day6: {
        type: Sequelize.STRING,
        allowNull: false
      },
      day7: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('dietPlans')
  }
}
