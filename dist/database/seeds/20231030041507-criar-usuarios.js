"use strict";const bcryptjs = require('bcryptjs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        nome: 'John Doe',
        email: 'John@Doe.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'John Doe Doe',
        email: 'JohnDoa@Doe.com',
        password_hash: await bcryptjs.hash('154456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'John Doe Shon',
        email: 'JohnShon@Doe.com',
        password_hash: await bcryptjs.hash('956456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down() {},
};
