const { DietPlan, User, UserDietPlan } = require('../models')
const db = require('../models/index.js')

const GetAllUserDietPlanWithPk = async (req, res) => {
  try {
    const userDietPlans = await db.sequelize.query(
      'SELECT * FROM user_diet_plans',
      {
        type: db.sequelize.QueryTypes.SELECT
      }
    )

    res.send(userDietPlans)
  } catch (error) {
    throw error
  }
}
const GetAllUserDietPlans = async (req, res) => {
  try {
    const userDietPlans = await UserDietPlan.findAll()
    res.send(userDietPlans)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUserDietPlanWithPk,
  GetAllUserDietPlans
}
