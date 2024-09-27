import express from 'express'
import { User,RefreshToken } from './userModel.js'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'


const UserRouter =express.Router()


UserRouter.get('/generate/key/', (request, response) => {

    const key = crypto.randomBytes(64).toString('hex')

    response.json(key)
})

UserRouter.post('/create/', async (request, response) => {

    const all_user = await User.find({})

    const {username} = request.body

    const user_check = all_user.find(user => user.username === username)

    if (user_check === undefined) {
        
        const new_user = new User(request.body)

        await new_user.save()

        response.json({
            status:true,
            message:"User Created"})
    }

    else {
        response.json({
            status:false,
            message:"User already exists!"})
    }
})

UserRouter.post('/validate/', async (request, response) => {

    const {username, password} = request.body

    const all_user = await User.find({})

    const user_check = all_user.find(user => user.username === username)

   if (user_check === undefined) response.json({

        status: false,
        message: "Invalid Username"
    })
    
    else {

        if (user_check.password === password) {

            const user = {
                name: username
            }

            const access_token = jwt.sign(user, process.env.ACCESS_TOKEN_KEY, {expiresIn: "30s"})

            const refresh_token = jwt.sign(user, process.env.REFRESH_TOKEN_KEY)
            

            const new_refresh_token = new RefreshToken({
                refresh_token: refresh_token
                
            })

            await new_refresh_token.save()

            response.json({
                status: true,
                message: "Valid User",
                access_token: access_token,
                refresh_token: refresh_token,
                user_data: user_check
            })
        }

        else response.json({
            status: false,
            message: "Invalid Password"
        })

    }

})

UserRouter.post('/token/', async(request, response) => {

    const refresh_token = request.body.refresh_token
    
    if (refresh_token === null) {
        return response.status(401).json("No token found")
    }

    const all_refresh_tokens = await RefreshToken.find({refresh_token: refresh_token})

    if (all_refresh_tokens.length === 0) {
        
        return response.status(403).json("Invalid Token")
    }

    jwt.verify(refresh_token, process.env.REFRESH_TOKEN_KEY, (error, user) => {
        
        if (error) {
            return response.status(403).json("Token Verification Failed")
        }

        const access_token = jwt.sign({name: user.name}, process.env.ACCESS_TOKEN_KEY, {expiresIn: "30s"})
        
        response.json({
            access_token: access_token
        })
    })

})

UserRouter.post('/logout/', async (request, response) => {

    const refresh_token = request.body.refresh_token

    const all_refresh_tokens = await RefreshToken.find({})

    let selected_token = all_refresh_tokens.find(token => token.refresh_token === refresh_token)

    await RefreshToken.findByIdAndDelete(selected_token._id)

    response.status(200).json("Refresh Token Deleted")
})

export default UserRouter