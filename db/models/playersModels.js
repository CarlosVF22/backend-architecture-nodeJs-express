const {Model, DataTypes, Sequelize} = require('sequelize');

const PLAYERS_TABLE = "players";

const PlayersSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name:{
        allowNull: false,
        type: DataTypes.STRING
    },
    position:{
        allowNull: false,
        type: DataTypes.STRING
    },
    nationality:{
        allowNull: false,
        type: DataTypes.STRING
    },
    teamName: {
        allowNull:false,
        type:DataTypes.STRING
    }
}

class Players extends Model{
    static associate() {
        //associate
        //trabajamos las relaciones
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PLAYERS_TABLE,
            modelName: 'Players',
            timestamps: false
        }
    }
}

module.exports = {PLAYERS_TABLE, PlayersSchema, Players}