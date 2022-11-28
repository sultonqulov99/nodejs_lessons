import { Sequelize } from "sequelize"
import model from '../models/index.js'

const sequelize = new Sequelize({
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    dialect: 'postgres',
    logging: false
})

export default async () => {
    try {
        await sequelize.authenticate()
        console.log('Database connnected!')

        await model.users({ sequelize })
        await model.levels({ sequelize })
        await model.tenses({ sequelize })
        await model.tests({ sequelize })
        await model.sub_tenses({ sequelize })
        await model.test_answer({ sequelize })
        
        await sequelize.sync({ force: true })

        return sequelize
    } catch (error) {
        console.log('Database error: ' + error.message)
    }
}