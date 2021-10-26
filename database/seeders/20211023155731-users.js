"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Omar",
          lastName: "Sukarieh",
          email: "omarskdev@gmail.com",
          password: bcrypt.hashSync("secret", 10),
          gender: "Male",
        },
        {
          firstName: "Roba",
          lastName: "Bader",
          email: "roba@gmail.com",
          password: bcrypt.hashSync("secret", 10),
          gender: "Female",
        },
        {
          firstName: "Raneem",
          lastName: "Al-Tailony",
          email: "raneem@gmail.com",
          password: bcrypt.hashSync("secret", 10),
          gender: "Female",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
