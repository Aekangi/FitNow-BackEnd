const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const UserRouter = require('./UserRouter')
const ExerciseRouter = require('./ExerciseRouter')
const DietPlanRouter = require('./DietPlanRouter')
const UserDietPlanRouter = require('./UserDietPlanRouter')
const UserExerciseRouter = require('./UserExerciseRouter')

Router.use('/auth', AuthRouter)
Router.use('/users', UserRouter)
Router.use('/exercises', ExerciseRouter)
Router.use('/dietplans', DietPlanRouter)
Router.use('/user-diet-plans', UserDietPlanRouter)
Router.use('/user-exercises', UserExerciseRouter)

module.exports = Router
