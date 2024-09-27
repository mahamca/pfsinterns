import express, { request, response } from 'express'
import { Subject } from './subModel.js'

const subRouter = express.Router()

subRouter.get('/all/',async(request,response)=>{
    const sub_data = await Subject.find({})
    response.json(sub_data)
})

subRouter.post('/add/', async(request,response)=>{
    const sub_data=new Subject(request.body)
    await sub_data.save()
    response.json("DATA SAVED")

})

export default subRouter