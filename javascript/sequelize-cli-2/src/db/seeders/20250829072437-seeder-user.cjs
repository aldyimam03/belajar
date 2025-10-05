"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "John 1",
        lastName: "Doe",
        email: "example1@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "John 2",
        lastName: "Doe",
        email: "example2@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "John 3",
        lastName: "Doe",
        email: "example3@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
