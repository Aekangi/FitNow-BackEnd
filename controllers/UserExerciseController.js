const { Exercise, User, UserExercise } = require('../models')
const db = require('../models/index.js')

const GetAllUserExercisesWithPk = async (req, res) => {
  try {
    const userExercises = await db.sequelize.query(
      'SELECT * FROM user_exercises',
      {
        type: db.sequelize.QueryTypes.SELECT
      }
    )

    res.send(userExercises)
  } catch (error) {
    throw error
  }
}
const GetAllUserExercises = async (req, res) => {
  try {
    const userExercises = await UserExercise.findAll()
    res.send(userExercises)
  } catch (error) {
    throw error
  }
}
const GetAllUsersAndExercises = async (req, res) => {
  try {
    const userExercises = await User.findAll({
      include: [
        {
          model: Exercise,
          as: 'exercise_list',
          through: { attributes: [] }
        }
      ]
    })
    res.send(userExercises)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUserExercisesWithPk,
  GetAllUserExercises,
  GetAllUsersAndExercises
}
