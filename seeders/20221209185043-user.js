'use strict'
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [...Array(20)].map(() => ({
      username: falso.randUserName(),
      name: falso.randFullName(),
      passwordDigest: falso.randPassword({ min: 0, max: 20 }),
      email: falso.randEmail(),
      createdAt: falso.randPastDate(),
      updatedAt: falso.randRecentDate()
    }))
    await queryInterface.bulkInsert('users', users)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users')
  }
}
