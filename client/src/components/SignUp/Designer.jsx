import React, {useEffect, useState} from 'react'
import '../../assets/css/signup.css'
import axios from 'axios'

const Designer = ()=>{

const [email, setEmail]  = useState("");
const [password, setPassword] = useState("");
const [capacityRange, setCapacityRange] = useState("")
const [designer, setDesigner] = useState("")
const [education, setEducation] = useState("")
const [msg, setMsg] = useState("")

const saveDetails = (e)=>{
  e.preventDefault()
  let user = {
    email: email,
    password: password,
    role:"designer",
    capacity:capacityRange,
    designer:designer,
    education: education
  }
  axios.post('/api/designerRegister', user)
  .then(response=>{
    setMsg("Account Created Successfully, Click for Login")
    setEmail("")
    setPassword("")
    setCapacityRange("")
    setDesigner("")
    setEducation("")
  })
  .catch(error=>{
    setMsg("Id not Created" + error.message)
  })
}


  return(
    <div>
    <div className="info text-center" style={{color:"green"}}>{msg}</div>

    <div className='wrapper' id="wrapper">

       <div className='form-wrapper' id="form-wrapper">

         <form  onSubmit={saveDetails} >

           <div className='email'>
             <label htmlFor="email">Email</label>
             <input type='email' name='email'  value={email} onChange={(e)=>setEmail(e.target.value)}  required/>
           </div>

           <div className='password'>
             <label htmlFor="password">Password</label>
             <input type='text' name='password'  value={password} onChange={(e)=>setPassword(e.target.value)} required/>
           </div>

           <div className='capacity'>
             <label htmlFor="capacity">How much time (in Hours) can you spend on Naya projects per week?</label>
             <input type='Number' name='capacity' value={capacityRange} onChange={(e)=>setCapacityRange(e.target.value)} required/>

           </div>

           <div className='designer'>
             <label htmlFor="designer">Which of the following best describes you?</label>
             <select className="form-control" onChange={(e)=>setDesigner(e.target.value)} required>
                <option>Furniture Designer</option>
                <option>Architect</option>
                <option>Interior Designer</option>
                <option>Industrial Designer</option>
                <option>Designer Maker</option>
                <option>Other</option>
             </select>
           </div>

           <div className='education'>
             <label htmlFor="education">Education level/type</label>
             <input type='text' name='education'  value={education} onChange={(e)=>setEducation(e.target.value)} required/>
           </div>

           <div className='submit'>
             <button className="btn btn-primary">Create Account</button>
           </div>
           <small className="text-center" style={{width:"100%"}}>Or</small>
           <div style={{margin: "auto", width:"100%", flexWrap: "wrap"}}>
             <button className="btn btn-info"><a href="/login">Login</a></button>
           </div>


         </form>
       </div>
     </div>
     </div>
  )
}

export default Designer
