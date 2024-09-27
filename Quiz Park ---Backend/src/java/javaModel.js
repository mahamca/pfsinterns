import mongoose from "mongoose";

const javaModel=mongoose.Schema({
    userid:{
        type:String,
        required:true
    
    },

    name:{
        type:String,
        required:true
    },
    des:{
        type:String,
        required:true
    },
    time:{
        type:Number,
        required:true
    }
    
})

export const Java= mongoose.model('java',javaModel)

const questionSchema=mongoose.Schema({
    ansName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Java'
    },
    level:{
        type:String,
        required:true
    },
    question:
    {
        type:String,
        required:true
    },
    option1:{
        type:String,
        required:true
    },
    option2:{
        type:String,
        required:true
    },
    option3:
    {
        type:String,
        required:true
    },
    ans:
    {
        type:String,
        required:true
    }
    

})
export const JavaQuestion=mongoose.model('javaQuestion',questionSchema)