const Router = require('express').Router()
const controller = require('../controllers/UserExerciseController')

Router.get('/pk', controller.GetAllUserExercisesWithPk)
Router.get('/', controller.GetAllUserExercises)
Router.get('/all', controller.GetAllUsersAndExercises)
Router.get('/:user_exercise_id', controller.GetAllUsersAndExercisesById)
Router.get('/user/:user_id', controller.GetAllUsersAndExercisesByUserId)
Router.get(
  '/exercise/:exercise_id',
  controller.GetAllUsersAndExercisesByExerciseId
)
Router.post(
  '/user/:user_id/exercise/:exercise_id',
  controller.CreateUserExercise
)
Router.put('/:user_exercise_id', controller.UpdateUserExerciseById)
Router.delete('/:user_exercise_id', controller.DeleteUserExerciseById)

module.exports = Router
