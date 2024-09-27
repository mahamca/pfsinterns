import express from 'express'
import { Score } from './scoreModel.js'

const scoreRouter = express.Router()

scoreRouter.post('/add/',async(request,response)=>{
    const new_data = new Score(request.body)
    await new_data.save()
    response.json("DATA SAVED")
})

scoreRouter.post('/check/',async(request,response)=>{

    const {name, email} = request.body
    const all_user = await Score.find({})
    const user_check = all_user.find(score => (score.name === name && score.email===email))

    if(user_check !== undefined)
            {
                response.json({

                    status: true, 
                    message: "Multiple attempts not allowed"
                })
    }
    else{
        response.json("")
    }

})


scoreRouter.get('/data/', async(request,response)=>{
    const score_data = await Score.find({})
    response.json(score_data)
    })

scoreRouter.get('/:id/', async(request,response)=>{
        const {id} = request.params
       const  score_data = await Score.findById(id,request.body)
         response.json(score_data)
         })

export default scoreRouter
