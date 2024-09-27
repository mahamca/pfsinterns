import express, { request , response } from 'express'
import { Cart } from './cartModel.js'
import Razorpay from 'razorpay'

const cartRouter=express.Router()

cartRouter.post('/add/',async(request,response)=>{
    
    const new_data = new Cart(request.body)
    await new_data.save()
    response.json("DATA SAVED") 

})

cartRouter.get('/data/',async(request,response)=>{
    const data=await Cart.find({})
    response.json(data)
 
})
cartRouter.get('/:id/',async(request,response)=>{
    const {id}=request.params
    const data=await Cart.findById(id)
    response.json(data)
 
})

cartRouter.post('/create-order', async (request, response) => {

    const razorpay = new Razorpay({
        key_id: 'rzp_test_md6y3XREwJUu2i',
        key_secret: 'y3ox3ZweWeSodYUH4AgcRXIP',
    });
    const options = {
        amount: request.body.amount, // Amount in paise
        currency: 'INR',
    };

    try {
        const order = await razorpay.orders.create(options);
        response.json(order);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});

 





export default cartRouter