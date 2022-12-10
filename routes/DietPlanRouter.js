const Router = require('express').Router()
const controller = require('../controllers/DietPlanController')
const middleware = require('../middleware')

Router.get('/', controller.GetAllDietPlans)
Router.get('/user/:user_id', controller.GetDietPlanByUserId)
Router.get('/:activity_id', controller.GetDietPlanById)
Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateDietPlan
)
Router.put(
  '/:activity_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateDietPlanById
)
Router.delete(
  '/:activity_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteDietPlanById
)

module.exports = Router
