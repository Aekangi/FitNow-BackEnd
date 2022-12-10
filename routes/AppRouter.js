const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const UserRouter = require('./UserRouter')
const ExerciseRouter = require('./ExerciseRouter')
const DietPlanRouter = require('./DietPlanRouter')

Router.use('/auth', AuthRouter)
Router.use('/users', UserRouter)
Router.use('/exercises', ExerciseRouter)
Router.use('/dietplans', DietPlanRouter)

module.exports = Router
