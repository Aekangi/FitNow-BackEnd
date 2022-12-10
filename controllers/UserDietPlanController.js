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
const GetAllUsersAndDietPlans = async (req, res) => {
  try {
    const userDietPlans = await User.findAll({
      include: [
        {
          model: DietPlan,
          as: 'dietPlan_list',
          through: { attributes: [] }
        }
      ]
    })
    res.send(userDietPlans)
  } catch (error) {
    throw error
  }
}
const GetAllUsersAndDietPlansById = async (req, res) => {
  try {
    const userDietPlanId = parseInt(req.params.user_diet_plan_id)
    const userDietPlan = await UserDietPlan.findAll({
      where: { id: userDietPlanId }
    })
    res.send(userDietPlan)
  } catch (error) {
    throw error
  }
}
const GetAllUsersAndDietPlansByUserId = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id)
    const userDietPlanByUserId = await User.findAll({
      where: { id: userId },
      include: [
        {
          model: DietPlan,
          as: 'dietPlan_list',
          through: { attributes: [] }
        }
      ]
    })
    res.send(userDietPlanByUserId)
  } catch (error) {
    throw error
  }
}
const GetAllUsersAndDietPlansByDietPlanId = async (req, res) => {
  try {
    const dietPlanId = parseInt(req.params.diet_plan_id)
    const getUserDietPlanByDietPlanId = await DietPlan.findAll({
      where: { id: dietPlanId },
      include: [
        {
          model: User,
          as: 'user_list',
          through: { attributes: [] }
        }
      ]
    })
    res.send(getUserDietPlanByDietPlanId)
  } catch (error) {
    throw error
  }
}
const CreateUserDietPlan = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id)
    const dietPlanId = parseInt(req.params.diet_plan_id)
    const userDietPlan = await UserDietPlan.create({
      userId,
      dietPlanId,
      ...req.body
    })
    res.send(userDietPlan)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUserDietPlanWithPk,
  GetAllUserDietPlans,
  GetAllUsersAndDietPlans,
  GetAllUsersAndDietPlansById,
  GetAllUsersAndDietPlansByUserId,
  GetAllUsersAndDietPlansByDietPlanId,
  CreateUserDietPlan
}
