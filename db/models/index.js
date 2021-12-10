
const {Players, PlayersSchema} = require('./playersModels');
// const {Players, PlayersSchema} = require('./playersModels');


function setupModels(sequelize){
    Players.init(PlayersSchema, Players.config(sequelize));
    // Players.init(PlayersSchema, Players.config(sequelize));
}

module.exports = setupModels;
