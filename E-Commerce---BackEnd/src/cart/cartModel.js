import mongoose from "mongoose";

const cartModel=mongoose.Schema({
   
    custid:{type:String},
    image: String,
    pname:{
        type:String,
        
        },
    price:{
        type:Number,
        
    },
    
    quantity:{
        type:Number
    }
        ,
   bamount:{type:Number}
    
})

export const Cart= mongoose.model('cart',cartModel)