import React, {useState, useEffect} from 'react'
import '../assets/css/Login.css'
import {Redirect} from 'react-router-dom';
import axios from 'axios'
import jwt_decode from 'jwt-decode';


const Login = ()=>{
  const [email, setEmail]  = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [status, setStatus] = useState("");


  useEffect(() => {
    const token = localStorage.getItem("token")
   if (token) {
   setisLoggedIn(true)
   }
},[])

  const loginCredentials = (e)=>{
    e.preventDefault()
    let user = {
      email: email,
      password: password
    }
axios
.post('/api/login', user)
.then(data=>{
  const token =  localStorage.setItem("token", data.data);

 setisLoggedIn(true)
 setStatus("Login Success")

  })
  .catch(err=>{
    setStatus("User Id Password Not Matched")
  })
}



  return(
    <div>
    {isLoggedIn===true?(<Redirect to = "/auth"/>):(
    <div className="modal-dialog modal-login">
       <div className="modal-content">
         <div className="modal-header">
           <h4 className="modal-title">Sign In</h4>
         </div>
         <div className="modal-body">
           <form onSubmit={loginCredentials}>
             <div className="form-group">
               <div className="input-group">
                 <span className="input-group-addon"><i className="fa fa-user" /></span>
                 <input type="text" className="form-control" name="email" placeholder="Enter Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} required="required" />
               </div>
             </div>
             <div className="form-group">
               <div className="input-group">
                 <span className="input-group-addon"><i className="fa fa-lock" /></span>
                 <input type="text" className="form-control" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required="required" />
               </div>
             </div>
             <div className="form-group">
               <button type="submit" className="btn btn-primary btn-block btn-lg">Sign In</button>
             </div>
           </form>
         </div>
         <div className="modal-footer">Don't have an account? <a href="/" style={{textDecoration:"none"}}>Create one</a></div>
       </div>
     </div>
   )}
   </div>
  )
}

export default Login;
