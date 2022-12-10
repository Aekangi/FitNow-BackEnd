const { Exercise } = require('../models')

const GetAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.findAll()
    res.send(exercises)
  } catch (error) {
    throw error
  }
}
const GetExerciseById = async (req, res) => {
  try {
    const exerciseId = parseInt(req.params.exercise_id)
    const exercise = await Exercise.findByPk(exerciseId)
    res.send(exercise)
  } catch (error) {
    throw error
  }
}
const GetExerciseByUserId = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id)
    const exercise = await Exercise.findAll({ where: { userId: userId } })
    res.send(exercise)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllExercises,
  GetExerciseById,
  GetExerciseByUserId
}
