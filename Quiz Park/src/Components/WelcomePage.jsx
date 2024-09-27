import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const WelcomePage = () => {
const navigate=useNavigate()
  return (
    <div>
      
   
     <h1 style={{color:"black"}}> Welcome to QUIZ PARK!</h1>
    

<div>
<button className='btn btn-info float-start' onClick={()=>navigate('/createform/')}>Create NEW FORM</button>
</div>





    </div>
  )
}

export default WelcomePage