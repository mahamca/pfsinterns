// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'


// const Addtocart = () => {

//     const params=useParams()
//     const {id} = params

// const [product_details,setProductDetails] =useState([])
// const [cartdetails,setCartdetails]=useState([])
// const [quantity,setQuantity] = useState('')
// const [price,setPrice]=useState('')
// const [amt,setAmt] =useState('')
// const [totamt,setTotamt] = useState('')

// useEffect(()=>{
//     axios.get(`http://127.0.0.1:4001/product/${id}`)
//     .then(response=>setProductDetails(response.data))
//     .catch(error=>console.log(error))

// },[])






//   return (
//     <div>Addtocart
// <table>
//     <thead>
//         <tr>
//             <th>Product </th>
//             <th>price</th>
//             <th>Quantity</th>
//             <th>amount</th>

//         </tr>
//     </thead>
//     <tbody>
//     <tr>
//     <td> <img src={product_details.image} alt={product_details.name} className="thumbnail" /></td>
//     <td>{product_details.pname}</td>
//     <td>{product_details.price}</td>
//    <td> 
//                     <input type="Number"  value={quantity}  onChange={event=>setQuantity(event.target.value)}/></td>
                    
// </tr>
//     </tbody>
// </table>




//     </div>
//   )
// }

// export default Addtocart


import React from 'react'

const Addtocart = ({item,index}) => {
  return (
    
 <div key={item.id} className="product">
                    <img src={item.image} alt={item.name} className="thumbnail" />
                    <h2>{item.pname}</h2>
                    <p>Rs.{item.price.toFixed(2)}</p> 
    
   </div>
  )
}

export default Addtocart