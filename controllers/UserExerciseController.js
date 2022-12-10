const { Exercise, User, UserExercise } = require('../models')
const db = require('../models/index.js')

const GetAllUserExercisesWithPk = async (req, res) => {
  try {
    const userExercises = await db.sequelize.query(
      'SELECT * FROM user_diet_plans',
      {
        type: db.sequelize.QueryTypes.SELECT
      }
    )

    res.send(userExercises)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUserExercisesWithPk
}
