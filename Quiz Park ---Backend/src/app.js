import { config } from 'dotenv'
import express, { json, urlencoded } from 'express'
import { set,connect } from 'mongoose'
import cors from 'cors'

import userRouter from './user/UserRouter.js'
import subRouter from './quiz/subRouter.js'
import javaRouter from './java/javaRouter.js'
import scoreRouter from './score/scoreRouter.js'

import sendMail from './sendMail.js'

const app=express()

app.use(json())
app.use(cors())
app.use(urlencoded({extended:true}))
config()
set('strictQuery',false)


app.use('/user/',userRouter)
app.use('/subject/', subRouter)
app.use('/java/',javaRouter)
app.use('/score/',scoreRouter)
app.use('/sendmail/',sendMail)


const port = process.env.PORT
const mongo_db = process.env.MONGO_DB


const start=async()=>{
    await connect(`${mongo_db}`)
    app.listen(port,console.log(`listening on the port ${port}`))
}


start()

