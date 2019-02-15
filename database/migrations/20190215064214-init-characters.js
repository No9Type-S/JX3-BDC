'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, TEXT } = Sequelize
    await queryInterface.createTable('characters',{
      id: { type: INTEGER, primaryKey: true, autoIncrement: true, unique: true },
      name: STRING(20),
      todo: TEXT,
      created_at: DATE,
      updated_at: DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('characters')
  }
};
