import React, { useState } from 'react'
import axios from 'axios'

const AddProduct = () => {
    const [base64String, setBase64String] = useState('')
  
    const [pname,setName] =useState('')
   const [price,setPrice] =useState('')
  
    

    const handleImageChange = event => {

        const file = event.target.files[0]

        const reader = new FileReader()

        reader.onloadend = () => {

            const base64 = reader.result

            setBase64String(base64)
        }

        reader.readAsDataURL(file)
    }

  const Submit = (event) => {

    event.preventDefault()
    
    const dataset ={
        image: base64String,
        pname:pname,
        price:price,
        
    }
    axios.post("http://127.0.0.1:4001/product/upload",dataset)
    .then(response => {
        console.log("saved");
        
    })
    .catch(error => {})

  }



  return (
    <div>AddProduct

<div>
            <h2>Upload a Image:</h2>

            <input type="file" accept="image/*" onChange={handleImageChange} />
            <form className='row'>
<label htmlFor="">Product Name</label>
<input type="text" value={pname} onChange={(event)=>setName(event.target.value)} /><br /><br />
<label htmlFor="">Product Price</label>
<input type="Number" value={price} onChange={(event)=>setPrice(event.target.value)} /><br /><br />
</form>


            <input type="submit" onClick={Submit}/>

            {/* <ImageDisplay source={image_source}></ImageDisplay> */}
        </div>




    </div>
  )
}

export default AddProduct