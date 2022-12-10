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
const GetAllUsersAndExercisesById = async (req, res) => {
  try {
    const userExerciseId = parseInt(req.params.user_exercise_id)
    const userExercise = await UserExercise.findAll({
      where: { id: userExerciseId }
    })
    res.send(userExercise)
  } catch (error) {
    throw error
  }
}
const GetAllUsersAndExercisesByUserId = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id)
    const userExerciseByUserId = await User.findAll({
      where: { id: userId },
      include: [
        {
          model: Exercise,
          as: 'exercise_list',
          through: { attributes: [] }
        }
      ]
    })
    res.send(userExerciseByUserId)
  } catch (error) {
    throw error
  }
}
const GetAllUsersAndExercisesByExerciseId = async (req, res) => {
  try {
    const exerciseId = parseInt(req.params.exercise_id)
    const getUserExerciseByExerciseId = await Exercise.findAll({
      where: { id: exerciseId },
      include: [
        {
          model: User,
          as: 'users_list',
          through: { attributes: [] }
        }
      ]
    })
    res.send(getUserExerciseByExerciseId)
  } catch (error) {
    throw error
  }
}
const CreateUserExercise = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id)
    const exerciseId = parseInt(req.params.exercise_id)
    const userExercise = await UserExercise.create({
      userId,
      exerciseId,
      ...req.body
    })
    res.send(userExercise)
  } catch (error) {
    throw error
  }
}
const UpdateUserExerciseById = async (req, res) => {
  try {
    const userExerciseId = parseInt(req.params.user_exercise_id)
    const updatedUserExercise = await UserExercise.update(req.body, {
      where: { id: userExerciseId },
      returning: true
    })
    res.send(updatedUserExercise)
  } catch (error) {
    throw error
  }
}
const DeleteUserExerciseById = async (req, res) => {
  try {
    const userExerciseId = parseInt(req.params.user_exercise_id)
    await UserExercise.destroy({ where: { id: userExerciseId } })
    res.send({
      message: `Deleted user exercise with an id of ${userExerciseId}`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUserExercisesWithPk,
  GetAllUserExercises,
  GetAllUsersAndExercises,
  GetAllUsersAndExercisesById,
  GetAllUsersAndExercisesByUserId,
  GetAllUsersAndExercisesByExerciseId,
  CreateUserExercise,
  UpdateUserExerciseById,
  DeleteUserExerciseById
}
