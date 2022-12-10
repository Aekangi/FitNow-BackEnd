const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const UserRouter = require('./UserRouter')
const ExerciseRouter = require('./ExerciseRouter')
const DietPlanRouter = require('./DietPlanRouter')
const UserDietPlanRouter = require('./UserDietPlanRouter')

Router.use('/auth', AuthRouter)
Router.use('/users', UserRouter)
Router.use('/exercises', ExerciseRouter)
Router.use('/dietplans', DietPlanRouter)
Router.use('/user-diet-plans', UserDietPlanRouter)

module.exports = Router
