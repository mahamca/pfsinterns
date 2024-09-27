import express, { json, urlencoded } from 'express'
import { config } from 'dotenv'
import { set,connect } from 'mongoose'
import productRouter from './products/productRouter.js'
import cors from 'cors'
import cartRouter from './cart/cartRouter.js'
import Razorpay from 'razorpay'
import UserRouter from './user/UserRouter.js'
import orderRouter from './order/orderRouter.js'

const app=express()
app.use(json())
app.use(cors())
app.use(urlencoded({extended:true}))
config()
set('strictQuery',false)


app.use('/product/',productRouter)
app.use('/cart/',cartRouter)
app.use('/user/',UserRouter)
app.use('/order/',orderRouter)



const port=process.env.PORT
const mongo_db=process.env.MONGO_DB

const start=async()=>{
    await connect(`${mongo_db}`)
    app.listen(port,console.log(`listening on the port ${port}`)
)}


start()