import React, { useEffect, useState } from 'react'

import Addtocart from './Products/Addtocart'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const [image_source, setImageSource] = useState('')
  const naviagate=useNavigate()
  const [pname,setPname] =useState('')

  
  const [quantity,setQuantity] =useState('')
    const [pdetails,setPdetails] =useState([])
    const [searchproduct,setSearchProduct] =useState([])
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
      };

  const search=(event)=>{
    event.preventDefault()

    const dataset={
      pname:pname
    }


axios.post('http://127.0.0.1:4001/product/all/',dataset)
        .then(response=>{ setSearchProduct(response.data)
          
        })
        .catch(error=>console.log(error))
      }



      useEffect(()=>{
        axios.get('http://127.0.0.1:4001/product/data')
        .then(response=>setPdetails(response.data))
        .catch(error=>console.log(error))
    },[])


     
 
    const navigate=useNavigate()
  const dataset={
    refresh_token:localStorage.getItem("Refresh")
  }

  const Handler =(event)=>{

    axios.post('http://127.0.0.1:4001/user/logout/',dataset)
    .then(response=>{
      localStorage.clear()
      navigate('/')
    
    })
    .catch(error=>console.log(error))
        
     }




   
    



  return (
    <div>
<div style={{background:"brown",color:"white"}}>
     <h1>Home</h1> <p style={{textAlign:"right"}}>Welcome {localStorage.getItem("Name")}</p> 
     <button className="btn btn-primary float-end" onClick={event=>Handler(event)}>Logout</button>
     
</div>

       <button className='btn btn-info' onClick={()=>naviagate('/addproduct/')}>Add Products</button> 
      <br /><br />
      
      
        <form role="search">
  <center>      <input className="styled-input" type="search" placeholder="type the Product name" value={pname} onChange={event=>setPname(event.target.value)} aria-label="Search"/>
        <button className="btn btn-outline-success"  type="submit" onClick={(event)=>search(event)} >Search</button></center>
         </form>
      <br />







      <h2 style={{textAlign:"center"}}><strong>All Products</strong></h2>
      <div className="product-list">
            {pdetails.map((product,index) => (
                <div key={product.id} className="product">
                    <img src={product.image} alt={product.name} className="thumbnail" />
                    <h2>{product.pname}</h2>
                    <p>Rs.{product.price.toFixed(2)}</p> 
                    <button className="btn btn-outline-success" style={{marginRight:"10px"}} onClick={()=>naviagate(`/products/buynow/${product._id}`)}>BUY NOW</button>
                    <button className="btn btn-outline-success" onClick={() => addToCart(product)}>ADD TO CART</button>
 
                </div>
            ))}
        </div>
     
     
    </div>







  )
}

export default Home