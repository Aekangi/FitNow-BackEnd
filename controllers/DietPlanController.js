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
const GetDietPlanById = async (req, res) => {
  try {
    const dietPlanId = parseInt(req.params.diet_plan_id)
    const dietPlan = await DietPlan.findByPk(dietPlanId)
    res.send(dietPlan)
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
const UpdateDietPlanById = async (req, res) => {
  try {
    const dietPlanId = parseInt(req.params.diet_plan_id)
    const updatedDietPlan = await DietPlan.update(req.body, {
      where: { id: dietPlanId },
      returning: true
    })
    res.send(updatedDietPlan)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllDietPlans,
  CreateDietPlan,
  GetDietPlanById,
  GetDietPlanByUserId,
  UpdateDietPlanById
}
