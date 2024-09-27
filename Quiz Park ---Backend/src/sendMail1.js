import express from 'express'

import pkg from 'nodemailer';
const {nodemailer} = pkg;

const sendMail = () => {
    const sender=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'mail id',
            pass:'password'
        }
    })
    const composemail={
        from:'',
        to:'',
        subject:'send mail using node JS',
        text:'hi'
    }
    sender.sendMail(composemail,function(error,info){
        if(error)
        {
            console.log(error);
            
        }
        else{
            console.log("Mail sent successfully"+info.response);
            
        }
    })
    
  return (
   
    console.log("Mail sent successfully"+info.response)


   
  )
}

export default sendMail



