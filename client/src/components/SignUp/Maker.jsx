import React, {useEffect, useState} from 'react'
import '../../assets/css/signup.css'
import axios from 'axios'

const Maker = ()=>{

const [email, setEmail]  = useState("");
const [password, setPassword] = useState("");
const [capacityRange, setCapacityRange] = useState("")
const [material, setMaterial] = useState("")
const [location, setLocation] = useState("")
const [msg, setMsg] = useState("")

const saveDetails = (e)=>{
  e.preventDefault()
  let user = {
    email: email,
    password: password,
    role:"maker",
    capacity:capacityRange,
    material:material,
    location: location
  }
  axios.post('/api/makerRegister', user)
  .then(response=>{
    setMsg("Account Created Successfully, Click for Login")
    setEmail("")
    setPassword("")
    setMaterial("")
    setLocation("")
    
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
             <label htmlFor="capacity">How many projects on average do you work on every month?</label>
             <input type='range' name='capacity' min="1" max="10" value={capacityRange} onChange={(e)=>setCapacityRange(e.target.value)} required/>
             <small>{capacityRange}</small>
           </div>

           <div className='material'>
             <label htmlFor="material">What kind of materials can you work with?</label>
             <select className="form-control" onChange={(e)=>setMaterial(e.target.value)} required>
                <option>Wood</option>
                <option>Metal</option>
                <option>Glass</option>
                <option>Plastic</option>
                <option>Concrete</option>
                <option>Other</option>
             </select>
           </div>

           <div className='location'>
             <label htmlFor="location">Where are your based out of?</label>
             <input type='text' name='location'  value={location} onChange={(e)=>setLocation(e.target.value)} required/>
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

export default Maker
