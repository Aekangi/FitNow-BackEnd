'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Userexercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Userexercise.init(
    {
      userId: DataTypes.INTEGER,
      exerciseId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Userexercise',
      tableName: 'userexercises'
    }
  )
  return Userexercise
}
