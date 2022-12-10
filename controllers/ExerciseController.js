const { Exercise } = require('../models')

const GetAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.findAll()
    res.send(exercises)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllExercises
}
