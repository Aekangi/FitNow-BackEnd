'use strict'
const falso = require('@ngneat/falso')
const { User, DietPlan } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user = await User.findAll({ raw: true })
    const dietPlans = await DietPlan.findAll({ raw: true })
    const user_diet_plans = user.map((u) => ({
      userId: u.id,
      dietPlanId: dietPlans[Math.floor(Math.random() * dietPlans.length)].id,
      createdAt: falso.randPastDate(),
      updatedAt: falso.randRecentDate()
    }))
    await queryInterface.bulkInsert('user_diet_plans', user_diet_plans)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_diet_plans')
  }
}
