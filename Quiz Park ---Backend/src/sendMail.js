import express from "express";
import nodemailer from 'nodemailer'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import path from "path";


const sendMail =express.Router()



sendMail.post('/send/', async (request, response) => {
   
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)
    
    const { to, subject, text, html } = request.body

    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "Your Mail Id",
          pass: "passcode",
        },
    })
    
    const mail_options = {
        from: {
            name: "Quiz Park",
            address: "Mail id"
        },
        to,
        subject,
        text,
        html,
        attachments: [
            {
                filename: 'QuizInstructions.pdf',
                path: path.join(__dirname, 'assets/Quiz Instructions.pdf'),
                contentType: 'application/pdf'
            }
            // {
            //     filename: 'Correction.png',
            //     path: path.join(__dirname, 'assets/parts.png'),
            //     contentType: 'image/png'
            // }
        ]
    }
    
    const sendMail = async(transporter, mail_options) => {
        try {
            await transporter.sendMail(mail_options)
            response.json("Email Sent")
        }
        catch (error) {
            response.json(error)
        }
    }
    
    sendMail(transporter, mail_options)
    
    
})

export default sendMail