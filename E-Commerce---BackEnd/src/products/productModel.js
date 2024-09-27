import mongoose from "mongoose";

const productModel=mongoose.Schema({
    image: String,
    pname:{
        type:String,
        required:true
    
    },
    price:{
        type:Number,
        required:true
    }
    
    
    
})

export const Product= mongoose.model('product',productModel)