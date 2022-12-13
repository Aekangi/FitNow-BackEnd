'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const exercises = [
      {
        name: 'Full Body Strength Workout',
        duration: '20 min',
        difficulty_level: '6/10',
        video_url: 'Q2cMMnUuKYQ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'BEGINNER AB WORKOUT ',
        duration: '10 min',
        difficulty_level: '3/10',
        video_url: '1f8yoFFdkcY',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'LEG WORKOUT FROM HELL + Cool Down',
        duration: '30 min',
        difficulty_level: '3/10',
        video_url: 'vK_DQYimccw',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: ' fat burning home workout for beginners',
        duration: '30 min',
        difficulty_level: '3/10',
        video_url: 'gC_L9qAHVJ8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'LOSE BELLY FAT in 10 Days (lower belly)',
        duration: '8 min',
        difficulty_level: '8/10',
        video_url: 'iZPjHyWhoDw',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Full Body Cardio HIIT Workout',
        duration: '20 min',
        difficulty_level: '9/10',
        video_url: 'M0uO8X3_tEA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'LOSE LOVE HANDLES and BELLY FAT in 14 Days',
        duration: '10 min',
        difficulty_level: '6/10',
        video_url: 'TF9-zVUQoSI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '10 MIN BODYWEIGHT WORKOUT',
        duration: '10 min',
        difficulty_level: '9/10',
        video_url: 'UoC_O3HzsH0',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lite Full Body Workout!',
        duration: '30 min',
        difficulty_level: '4/10',
        video_url: 's6yv8Ag-PHg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Burn 1000 Calories with this CARDIO HIIT Workout',
        duration: '20 min',
        difficulty_level: '10/10',
        video_url: 'yVUcHEOr450',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ankle and Foot Free Dynamic Yoga Flow',
        duration: '25 min',
        difficulty_level: '9/10',
        video_url: 'tsa4S3QgTfI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Leg Workout With Knee Pain',
        duration: '12 min',
        difficulty_level: '9/10',
        video_url: 'sapkxwJSuHA',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('exercises', exercises)
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('exercises')
  }
}
