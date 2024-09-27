import mongoose from "mongoose";

const subjectModel = mongoose.Schema({
    std:{
     type:String,
     required:true
    },
    subject:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    question:{
        type:Number,
        required:true
    }
})

export const Subject=mongoose.model('subject',subjectModel)