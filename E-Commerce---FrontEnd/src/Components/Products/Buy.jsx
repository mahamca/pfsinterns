import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Buy = () => {
    const params =useParams()
        const {id}=params
        const navigate=useNavigate()
    const [pname,setPname] =useState('')
     const [price,setPrice] =useState('')
      const [image,setImage] =useState('')
      const [quantity,setQuantity] =useState('')
    
 
useEffect(()=>{
    
    axios.get(`http://127.0.0.1:4001/product/${id}`)
    .then(response=>{ setImage(response.data.image),
        setPname(response.data.pname),
       setPrice(response.data.price)
    })
    .catch(error=>console.log(error))

},[])

// setamount(quantity*price)
let ans=(quantity*price)


const submit=(event)=>{
    event.preventDefault()
    const dataset={
        custid:localStorage.getItem("Id") ,
        prodid:id,
        quantity:quantity,
        amt:ans
    }
    
    
    axios.post('http://127.0.0.1:4001/order/add',dataset)
    .then(response=>navigate(`/payments/${id}`))
    .catch(error=>console.log(error))
    
}
 

  return (

  
    <div>
        <div style={{background:"brown",color:"white"}}>
     <h1>Home / {pname}</h1> <p style={{textAlign:"right"}}>Welcome {localStorage.getItem("Name")}</p> 
     
</div>

<div className="product-list">
<div  className="product">
        <img src={image} alt={pname} className="thumbnail" />
        <h2>{pname}</h2>
        <p>Rs.{price}</p>
       </div>
    <div>
    <label htmlFor="">Quantity</label>
    <input type="Number"  value={quantity}  onChange={event=>setQuantity(event.target.value)}/><br /><br />
<button onClick={(event)=> submit(event)}>Buy it Now</button>
</div>
        </div>




    </div>
  )
}

export default Buy