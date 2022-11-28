import express from 'express'
import './config.js'
import UserRouter from './routers/user.js'
import LevelRouter from './routers/level.js'
import TensRouter from './routers/tense.js'
import TestRouter from './routers/test.js'
import SubtenseRouter from './routers/sub_tense.js'
import database from './db/index.js'
import fs from 'fs'
import path from 'path'
import mockData from './db/mock.js'

const PORT = process.env.PORT || 4500

!async function () {
    const app = express()
    const db = await database()
    await mockData({ sequelize: db })
    app.use(express.json())

    app.use((req, res, next) => {
        req.models = db.models
        next()
    })

    app.use(UserRouter)
    app.use(LevelRouter)
    app.use(TensRouter)
    app.use(TestRouter)
    app.use(SubtenseRouter)

    app.use((error, req, res, next) => {
        if(error.status != 500){
            return res.status(error.status).json({
                status: error.status,
                message: error.message,
            })
        }
        fs.appendFileSync(
            path.join(process.cwd(),'src','logger.txt'),
            `${req.method}___${req.url}___${Date.now()}___${error.name}___${error.message}\n`
        )
        res.status(error.status).json({
            status: error.status,
            message: "Interval server error",
        })
    })

    app.listen(PORT, ()=> console.log('server ready at *' + PORT))
}()
