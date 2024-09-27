import axios from 'axios';
import React ,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const Payment = () => {
    const [data,setData]=useState([])
    const params=useParams()
    const {id}=params
const navigate=useNavigate()
useEffect(()=>{
    axios.get('http://127.0.0.1:4001/order/all')
    .then(response=>setData(response.data))
    .catch(error=>console.log(error)
    )
})
   




    const handlePayment = async () => {


        // const response = await fetch('http://127.0.0.1:4001/cart/create-order', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ amount: 50000 }), // Amount in paise
        // });
    
        // const orderData = await response.json();



        
        

const dataset={
    amount:50000
}

       

        const options = {
            key: "", // Replace with your Razorpay Key ID
            amount: 50000, // Amount in paise (50000 paise = ₹500)
            currency: "INR",
            name: "MAHA & CO",
            description: "Test Transaction",
            image: "https://your-logo-url.com/logo.png", // Optional
            order_id: "order_P1MO5dtYRqku57", // You need to create an order in your backend
            handler: function (response) {
                alert(`Payment successful: ${response.razorpay_payment_id}`);
                // You can also call your backend to verify the payment here
            },
            prefill: {
                name: "John Doe",
                email: "john.doe@example.com",
                contact: "9999999999",
            },
            theme: {
                color: "#F37254",
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
        axios.post("http://127.0.0.1:4001/cart/create-order/",options)
        .then(response => {
            console.log("saved");    })
        .catch(error => console.log(error))
    
    };



  return (
    <div>
        <div>
    <div style={{background:"brown",color:"white"}}>
 <h1>Home / Payment</h1> <p style={{textAlign:"right"}}>Welcome {localStorage.getItem("Name")}</p> 
 </div>
</div>

<div className='reg-button'>
      <button  className='btn btn-warning float-end' onClick={()=>navigate('/home/')}>BACK</button></div>
        


<div>
            <h2>Pay Now</h2>
            <button onClick={handlePayment}>Pay with Razorpay</button>
        </div>
    </div>
  )
}

export default Payment