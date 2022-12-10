const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const UserRouter = require('./UserRouter')
const ExerciseRouter = require('./ExerciseRouter')

Router.use('/auth', AuthRouter)
Router.use('/users', UserRouter)
Router.use('/exercises', ExerciseRouter)

module.exports = Router
