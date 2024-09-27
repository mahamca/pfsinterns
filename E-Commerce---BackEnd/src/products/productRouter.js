import express, { request , response } from 'express'
import { Product } from './productModel.js'

const productRouter=express.Router()

productRouter.post('/upload/',async(request,response)=>{
    
    const new_data = new Product(request.body)
    await new_data.save()
    response.json("DATA SAVED") 

})
productRouter.post('add',async(request,response)=>{
    
})

productRouter.get('/data/',async(request,response)=>{
    const data=await Product.find({})
    response.json(data)
 
})
productRouter.get('/:id/',async(request,response)=>{
    const {id}=request.params
    const data=await Product.findById(id)
    response.json(data)
 
})
productRouter.post('/all/',async(request,response)=>{
 
    const {pname}=request.body
    const product_details=await Product.find({})
   let result=[]
   const pro_details=await Product.find({},'image pname price')
     
    for(let data of pro_details)
    {  
        if(data.pname===pname)
        {
            // const pname=data.pname
            // const price=data.price
            // const gst = data.gst
            // const data1=[
            //     {"pname":data.pname,
            //         "price":data.price,"gst":data.gst}]
            //     result.push(data1)

            response.json({
                "image" : data.image,
                "pname":data.pname,
                   "price":data.price
                   
            })
        }
             
                         
    }
        

 

})



export default productRouter