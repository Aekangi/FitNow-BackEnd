const Router = require('express').Router()
const controller = require('../controllers/ExerciseController')
const middleware = require('../middleware')

Router.get('/', controller.GetAllExercises)
Router.get('/user/:user_id', controller.GetExerciseByUserId)
Router.get('/:exercise_id', controller.GetExerciseById)
Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateExercise
)
Router.put(
  '/:exercise_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateExerciseById
)
Router.delete(
  '/:exercise_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteExerciseById
)

module.exports = Router
