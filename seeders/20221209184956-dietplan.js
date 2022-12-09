'use strict'
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dietplan = [...Array(10)].map(() => ({
      photo: falso.randImg(),
      name: falso.randFirstName(),
      diet_type: falso.randFirstName(),
      day1: falso.randDirection(),
      day2: falso.randDirection(),
      day3: falso.randDirection(),
      day4: falso.randDirection(),
      day5: falso.randDirection(),
      day6: falso.randDirection(),
      day7: falso.randDirection(),
      createdAt: falso.randPastDate(),
      updatedAt: falso.randRecentDate()
    }))
    await queryInterface.bulkInsert('diet_plans', dietplan)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('diet_plans')
  }
}
