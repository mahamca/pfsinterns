import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Popup from '../Popup'

const ShareMail = () => {

   const [to,setTo] =useState('')
   const [subject,setSubject] =useState('')
   const [text,setText] =useState('')
   const [html,setHtml] =useState('')
   const [showModel,setShowModel] = useState(false)
   const navigate=useNavigate()


   const closeModel=()=>{
    setShowModel(false)
    navigate('/planlist/')
        
  }

   const submitHandler=(event)=>{
    event.preventDefault()
    const dataset={
      
      to:to,
        subject:subject,
        text:text,
        html:html,
         }
      
  
    axios.post('http://127.0.0.1:4002/sendmail/send/',dataset)
    .then(setShowModel(true)
    )
    .catch(error=>console.log("error"))
  }



  return (
    <div>
      <Popup show={showModel} handleClose={closeModel}>
    <p className='text-danger'><strong>E- mails triggered successfully</strong> </p>
  </Popup>
      <div className='container-fluid'>
     <button  className='btn btn-warning float-end' onClick={()=>navigate('/planlist/')}>Back</button><br />
     </div>
      <form className='form-group'>
        <label htmlFor="" >To:</label>
        <input type="text" value={to} onChange={event=>setTo(event.target.value)} placeholder='Add multiple email Ids seperated with comma'/><br /><br />
        <label htmlFor="">Subject</label>
        <input type="text" value={subject} onChange={event=>setSubject(event.target.value)} /><br /><br />
        <label htmlFor="">Text</label>
        <input type="text" value={text} onChange={event=>setText(event.target.value)} /><br /><br />
        <label htmlFor="">URL</label>
        <input type="text" value={html} onChange={event=>setHtml(event.target.value)} /><br /><br />
        <input type="button" value="Share" onClick={event=>submitHandler(event)} />
        
        
      </form>




      
    </div>
  )
}

export default ShareMail