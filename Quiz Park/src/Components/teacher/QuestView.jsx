import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { TextField } from '@mui/material'
import { Input, message } from 'antd'
import Popup from '../Popup'
import { useLocation } from "react-router-dom";

const QuestView = ({}) => {

  const location = useLocation();
    const currentURL = window.location.origin + location.pathname;
   const navigate=useNavigate() 
    const [desc_data,setDescData] = useState([]) 
    const [quest_data,setQuestData] = useState([])
    const [ans,setAns] =useState([])
    const [dbans,setDbans] =useState([])
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [score,setScore]=useState(0)
    const [showModel,setShowModel] = useState(false)
    const [isVisible, setIsVisible] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [attempt,setAttempt]=useState(0)
    const [isDataSaved, setIsDataSaved] = useState(false);
    const [time,setTime] =useState(1)
  

    useEffect(()=>{
      axios.get(`http://127.0.0.1:4002/java/${id}`)
      .then(response=>{setDescData(response.data[0]),setTime(response.data[0].time),setQuestData(response.data[1])})
      .catch(error=>console.log(error))
  },[]
  )

  useEffect(() => {
        setSeconds(time * 60);
  }, [time]);

    // const initialSeconds = ({time} * 60);
  
  const [seconds, setSeconds] = useState(time*60);
  const [isActive, setIsActive] = useState(false);
    

const closeModel=()=>{
      setShowModel(false)
      navigate('/thank/')
      
    }

    const toggleVisibility = () => {
      

      const dataset={
        name:name,
        email:email,
        
      }
        
axios.post('http://127.0.0.1:4002/score/check/',dataset)
.then(response=>{{
  if(response.data.status===true)
  {
    messageApi.info(response.data.message);
    
  }
  else{
setIsActive(true)
      setIsVisible(!isVisible);
  }
}
  
  })
.catch(error=>console.log(error))



    };

    const params=useParams()
    const {id}=params

    useEffect(() => {
        let intervalId;
        
        if (isActive && seconds > 0) {
            intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        } else if (seconds <= 0) {
            clearInterval(intervalId);
            if (!isDataSaved) { 
                saveData();
                setIsDataSaved(true); 
              }
            setIsActive(false); 
           setShowModel(true)
                        
        }
        
            
        return () => clearInterval(intervalId);
    }, [isActive,seconds]);


  
const saveData=()=>{
    const dataset={
        uid:id,
        name:name,
        email:email,
        score:score
        }
        
        axios.post('http://127.0.0.1:4002/score/add/',dataset)
        .then(response=>{console.log("data Saved")})
        .catch(error=>console.log(error))
}


  
    const formatTime = (totalSeconds) => {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };
  
    useEffect(()=>{
        let i=0,c=0
        for(let a of quest_data)
          {
           if(ans[i]===a.ans)
            c++
          i++
           
          }
          setScore(c);
          
         })
  



    

       const handle=(event,index)=>{
        const new_data=[...ans]
        new_data[index]=event.target.value
        setAns(new_data)
       }

     
       const submit=(event)=>{

        event.preventDefault()

        const dataset={
            uid:id,
            name:name,
            email:email,
            score:score
          }
            
    axios.post('http://127.0.0.1:4002/score/add/',dataset)
    .then(response=>{console.log("data Saved")})
    .catch(error=>console.log(error))
    setShowModel(true)
          
       }

  let data=quest_data.length>0 && 
quest_data.map((javaquestion,index)=>{
  
    return(
        <div key={index}>
          <br />
            <label htmlFor=""><b> Question {index+1}</b></label>
        <br />
        <TextField id="standard-basic" style={{width:"1000px"}}  variant="standard" value={javaquestion.question}  />
                <br /><br />
        <div className="input-group">
        <div className="input-group-text">
             <input className="form-check-input mt-0" type="radio" value={javaquestion.option1} onChange={(event)=>handle(event,index)} name={index}  aria-label="Radio button for following text input"/>
           </div>
           <input style={{width:"250px"}} type="text" value={javaquestion.option1} placeholder='Option 1'   aria-label="Text input with radio button"/>
         </div>
         <div className="input-group">
        <div className="input-group-text">
             <input className="form-check-input mt-0" type="radio" value={javaquestion.option2} onChange={(event)=>handle(event,index)} name={index} aria-label="Radio button for following text input"/>
           </div>
           <input style={{width:"250px"}} type="text" value={javaquestion.option2} placeholder='Option 1'   aria-label="Text input with radio button"/>
         </div>
         <div className="input-group">
        <div className="input-group-text">
             <input className="form-check-input mt-0" type="radio" value={javaquestion.option3} name={index} onChange={(event)=>handle(event,index)} aria-label="Radio button for following text input"/>
           </div>
           <input style={{width:"250px"}} type="text" value={javaquestion.option3} placeholder='Option 1'   aria-label="Text input with radio button"/>
         </div>
         <div>
         
          
         </div>

        </div>

    )
})



  return (
    <div>
      <Popup show={showModel} handleClose={closeModel}>
    <p className='text-danger'>Your Score is {score}</p>
  </Popup>
  {contextHolder}
      <div>

      {/* <div className='container-fluid'>
     <button  className='btn btn-warning float-end' onClick={()=>navigate('/planlist/')}>Back</button>
     </div> */}
        <h1><center>WELCOME TO QUIZ PARK</center></h1>
        <div style={{border: '1px solid white', // Set the border width, style, and color
       borderRadius:"20px", padding: '10px',         // Optional: Add padding inside the border
        margin: '10px', backgroundColor:"white",borderShadow:"0 4px 8px rgba(8, 4, 228, 0.1)"
    }}><center> <h4>INSTRUCTIONS</h4>
    Attend the quiz on time
    <p>  Multiple attempts not allowed</p></center></div>
        


        <div className='form-group'>
      
        <label htmlFor="">Name</label> &nbsp; &nbsp;&nbsp;
        <input type="text" required  style={{width:"500px"}} value={name} onChange={event=>setName(event.target.value)}/><br /><br />
        <label htmlFor="" >Email ID</label>&nbsp;
        <input type="text" required style={{width:"500px"}} value={email} onChange={event=>setEmail(event.target.value)} /> <br /><br />
        <button onClick={toggleVisibility} className='btn btn-primary'>
        {isVisible}START THE QUIZ
      </button>
      
       </div>
       
      

        
      </div>
      {isVisible && (
<div>
<h1 style={{textAlign:"end"}}>Your time starts now</h1>
      <p style={{textAlign:"end",}}><strong>{formatTime(seconds)}</strong></p>
   <center>
    <label htmlFor="" style={{fontSize:"25px", fontFamily:"sans-serif"}}>{desc_data.name}</label><br />
    <label htmlFor="" style={{fontSize:"25px", fontFamily:"sans-serif"}}>{desc_data.des}</label><br />
    
   
    </center>    
    <div>
    {data}
    </div>
    <br />

<input type="button" className='btn btn-info' onClick={(event)=>submit(event)} value="Submit"/>
     </div>)}
    

<br />



      
    </div>
  )
}

export default QuestView