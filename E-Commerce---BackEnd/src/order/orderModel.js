import mongoose from "mongoose";

const orderModel=mongoose.Schema({
    custid:{
        type:String
    },
    prodid:{
        type:String
    },
         quantity:{
        type:Number,
        required:true
    
    },
    price:{
        type:Number
    },

    amt:{
        type:Number
    }
    
    
    
})

export const Order= mongoose.model('order',orderModel)