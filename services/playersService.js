const faker = require('faker');
// const getConnection = require('../libs/postgres');

// const pool = require('../libs/postgresPool');

// const sequelize = require('../libs/sequelize');

const {models} = require('./../libs/sequelize');

class PlayersService {
    constructor() {
        this.players = []; //todo, conect to data
        this.generate();
        // this.pool = pool;
        // this.pool.on('error',(err) => console.error(err));

    }

    generate() {
        const limit = 100;
        for (let item = 0; item < limit; item++) {
            this.players.push({
                id:faker.datatype.uuid(),
                name: faker.name.firstName(),
                position: faker.lorem.word(),
                nationality: faker.address.country(),
                teamName: faker.lorem.words(),
                image: faker.image.imageUrl()
            })
        }
    }

    async find() {
        const rta = await models.Players.findAll();
        return rta;

        // const query = 'SELECT * FROM task';
        // const rta = await this.pool.query(query)
        // return rta.rows;


        // const [data, metadata] = await sequelize.query(query)
        // const [data] = await sequelize.query(query)
        // return {
        //     data,
        //     // metadata
        // };

        // const client = await getConnection();
        // const rta = await client.query('SELECT * FROM tasks');
        // return rta.rows;

        // return this.players;
    }

    async findOne(id){
        const wantedPlayerId = this.players.find(item => item.id === id);
        if (wantedPlayerId){
            return wantedPlayerId;
        } else{
            throw new Error('player not found');
        }
    }
}

module.exports = PlayersService;
