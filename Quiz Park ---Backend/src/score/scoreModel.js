import mongoose from "mongoose";

const scoreModel=mongoose.Schema({
    uid:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    score:{
        type:Number,
        
    }
})
export const Score=mongoose.model('score',scoreModel)