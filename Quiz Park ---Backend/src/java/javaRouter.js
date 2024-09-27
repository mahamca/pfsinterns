import express, { request,response } from 'express'
import { Java, JavaQuestion } from './javaModel.js'


const javaRouter = express.Router()

javaRouter.post('/add/',async(request,response)=>{
   const name_details = request.body[0]
   const quest_details = request.body[1]

   const new_data=new Java(name_details)
   await new_data.save()
    
   for(let quest_data of quest_details){
    const new_question = new JavaQuestion({
        ansName:new_data._id,
        level:quest_data.level,
        question:quest_data.question,
        option1:quest_data.option1,
        option2:quest_data.option2,
        option3:quest_data.option3,
         ans:quest_data.ans
    })    
    await new_question.save()
   }

   response.json("DATA SAVED")
})

javaRouter.post('/base/',async(request,response)=>{
   const {level}=request.body
   const {num} = request.body
    const filter={
             level:level
            }
    const data=await JavaQuestion.find(filter).limit(num)
    response.json(data)
 
//      const cursor=JavaQuestion.find({'status':'active'}).limit(10).toArray()
// response.json(cursor)  
   
})

javaRouter.get('/all/',async(request,response)=>{
   
   const data=await Java.find({})
      response.json(data)
   
})

javaRouter.get('/:id/', async(request,response)=>{
   const {id} = request.params
   const data=await Java.findById(id)
  const  java_data = await JavaQuestion.find({ansName:data._id})
  const single_data=[
   data,
   java_data
  ]
  
  
response.json(single_data)
    })

    javaRouter.patch('/:id/',async(request,response)=>{
      const {id}=request.params
      const name_details = request.body[0]
   const quest_details = request.body[1]
   await Java.findByIdAndUpdate(id,name_details)
   for(let quest_data of quest_details)
   {
      if(quest_data.new===true)
      {

         const new_questData=new JavaQuestion({
            ansName:quest_data.ansName,
            level:quest_data.level,
            question:quest_data.question,
            option1:quest_data.option1,
            option2:quest_data.option2,
            option3:quest_data.option3,
            ans:quest_data.ans
         })
          await new_questData.save()

      }
      else if(quest_data.update===true)
      {
         await JavaQuestion.findByIdAndUpdate(quest_data._id,{
            ansName:quest_data.ansName,
            level:quest_data.level,
            question:quest_data.question,
            option1:quest_data.option1,
            option2:quest_data.option2,
            option3:quest_data.option3,
            ans:quest_data.ans
         })
      }
      else if(quest_data.delete===true)
      {
         await JavaQuestion.findByIdAndDelete(quest_data._id)
      }
      else if(quest_data.existing===false)
      {
         await JavaQuestion.findByIdAndDelete(quest_data._id)
      }
     
   }
response.json("data saved")

    })
    

    javaRouter.delete('/:id/', async(request,response)=>{
        const {id} = request.params
        const desc_data = await Java.findById(id)
        const quest_data = await JavaQuestion.find({ansName : desc_data._id})
        for(let x of quest_data)
            {
                await JavaQuestion.findByIdAndDelete(x._id)
            }
            await Java.findByIdAndDelete(id)
            response.json("DELETED")
    })



export default javaRouter