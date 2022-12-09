'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class DietPlan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DietPlan.belongsToMany(models.User, {
        as: 'user_list',
        through: models.UserDietPlan,
        foreignKey: 'dietPlanId'
      })
    }
  }
  DietPlan.init(
    {
      photo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      diet_type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      day1: {
        type: DataTypes.STRING,
        allowNull: false
      },
      day2: {
        type: DataTypes.STRING,
        allowNull: false
      },
      day3: {
        type: DataTypes.STRING,
        allowNull: false
      },
      day4: {
        type: DataTypes.STRING,
        allowNull: false
      },
      day5: {
        type: DataTypes.STRING,
        allowNull: false
      },
      day6: {
        type: DataTypes.STRING,
        allowNull: false
      },
      day7: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'DietPlan',
      tableName: 'diet_plans'
    }
  )
  return DietPlan
}
