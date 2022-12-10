const Router = require('express').Router()
const controller = require('../controllers/DietPlanController')
const middleware = require('../middleware')

Router.get('/', controller.GetAllDietPlans)
Router.get('/user/:user_id', controller.GetDietPlanByUserId)
Router.get('/:diet_plan_id', controller.GetDietPlanById)
Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateDietPlan
)
Router.put(
  '/:diet_plan_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateDietPlanById
)
Router.delete(
  '/:diet_plan_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteDietPlanById
)

module.exports = Router
