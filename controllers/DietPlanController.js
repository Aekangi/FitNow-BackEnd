const { DietPlan } = require('../models')

const GetAllDietPlans = async (req, res) => {
  try {
    const dietPlans = await DietPlan.findAll()
    res.send(dietPlans)
  } catch (error) {
    throw error
  }
}
const CreateDietPlan = async (req, res) => {
  try {
    const dietplans = await DietPlan.create(req.body)
    res.send(dietplans)
  } catch (error) {
    throw error
  }
}
const GetDietPlanByUserId = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id)
    const dietplan = await DietPlan.findAll({ where: { userId: userId } })
    res.send(dietplan)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllDietPlans,
  CreateDietPlan,
  GetDietPlanByUserId
}
