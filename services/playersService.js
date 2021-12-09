const faker = require('faker');
// const getConnection = require('../libs/postgres');

const pool = require('../libs/postgresPool');

class PlayersService {
    constructor() {
        this.players = []; //todo, conect to data
        this.generate();
        this.pool = pool;
        this.pool.on('error',(err) => console.error(err));

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
        const query = 'SELECT * FROM tasks';
        const rta = await this.pool.query(query)
        return rta.rows;

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
