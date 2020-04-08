import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import jwt_decoder from 'jwt-decode';

import '../assets/css/Landing.css'

const Landing = () =>{

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(()=>{
     const token = localStorage.getItem("token")
     if (token) {
       setIsLoggedIn(true)
     }
  
 },[])




  return(
    <div>
    {(isLoggedIn===true) ? (<Redirect to ="/auth"/>):(
    <div className="container">
    <div>
      <p className="has-text-align-right loginLink">
        <a href="/login" >Login</a>
      </p>
    </div>
    <br/>
    <h3 className="text-center" style={{color:"#179b81", top:"20%"}}>What do you want to register as?</h3>
          <div className="row elementAlign">
            <div className="col-sm-4" >
              <p className="has-text-align-center card-style">
                <a href="/maker-SignUp">Maker</a>
              </p>
           </div>
            <div className="col-sm-4" >
              <p className="has-text-align-center card-style">
                <a href="/designer-SignUp">Designer</a>
              </p>
            </div>
            <div className="col-sm-4" >
              <p className="has-text-align-center card-style">
                <a href="/both-SignUp" >Both</a>
              </p>
            </div>
          </div>
        </div>
      )}
      </div>
  )
}

export default Landing;
