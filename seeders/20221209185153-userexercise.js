// 'use strict'
// const falso = require('@ngneat/falso')
// const { User, Exercise } = require('../models')

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     const user = await User.findAll({ raw: true })
//     const exercises = await Exercise.findAll({ raw: true })
//     const user_exercises = user.map((u) => ({
//       userId: u.id,
//       exerciseId: categories[Math.floor(Math.random() * exercises.length)].id,
//       createdAt: falso.randPastDate(),
//       updatedAt: falso.randRecentDate()
//     }))
//     await queryInterface.bulkInsert('user_exercises', user_exercises)
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.bulkDelete('user_exercises')
//   }
// }
