const Router = require('express').Router()
const controller = require('../controllers/UserDietPlanController')

Router.get('/pk', controller.GetAllUserDietPlanWithPk)
Router.get('/', controller.GetAllUserDietPlans)
Router.get('/all', controller.GetAllUsersAndDietPlans)
Router.get('/:user_diet_plan_id', controller.GetAllUsersAndDietPlansById)
Router.get('/user/:user_id', controller.GetAllUsersAndDietPlansByUserId)
Router.get(
  '/dietplan/:diet_plan_id',
  controller.GetAllUsersAndDietPlansByDietPlanId
)
Router.post(
  '/user/:user_id/dietplan/:diet_plan_id',
  controller.CreateUserDietPlan
)
Router.put('/:user_diet_plan_id', controller.UpdateUserDietPlanById)
Router.delete('/:user_diet_plan_id', controller.DeleteUserDietPlanById)

module.exports = Router
