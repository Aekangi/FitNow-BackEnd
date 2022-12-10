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

module.exports = {
  GetAllDietPlans,
  CreateDietPlan
}
