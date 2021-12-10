'use strict';

const {PlayersSchema, PLAYERS_TABLE} = require('./../models/playersModels');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(PLAYERS_TABLE, PlayersSchema);
    // await queryInterface.createTable(PLAYERS_TABLE, PlayersSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.drop(PLAYERS_TABLE);
    // await queryInterface.drop(PLAYERS_TABLE);
  }
};
