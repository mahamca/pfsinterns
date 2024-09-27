import express from 'express'
import { Order } from './orderModel.js'

const orderRouter=express.Router()

orderRouter.post('/add/',async(request,response)=>{
    const order_details=await Order(request.body)
    order_details.save()
    response.json("saved")
})
orderRouter.get('/all/',async(request,response)=>{
    const data=await Order.find({})
    response.json(data)
})

export default orderRouter