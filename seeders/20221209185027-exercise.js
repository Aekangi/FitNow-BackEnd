'use strict'
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const exercises = [...Array(20)].map(() => ({
      name: falso.randFirstName(),
      duration: falso.randTimeZone(),
      difficulty_level: falso.randNumber({ min: 0, max: 10 }),
      video_url: falso.randUrl(),
      createdAt: falso.randPastDate(),
      updatedAt: falso.randRecentDate()
    }))
    await queryInterface.bulkInsert('exercises', exercises)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('exercises')
  }
}
