
import React, { useState, useEffect } from "react";
import {Redirect} from 'react-router-dom';
import jwt_decoder from 'jwt-decode';
import axios from 'axios'
import "../../assets/css/Profile.css";


const DesignerProfile = ()=>{
  const [isLoggedIn, setIsLoggedIn] = useState("false")
  const [email, setEmail] = useState("")
  const [userDetails, setUserDetails] = useState([])


 useEffect(()=>{
    const token = localStorage.getItem("token")
    if (token) {
      setIsLoggedIn(true)
    }
    let decoder = jwt_decoder(token)
    setEmail(decoder.email)
    getDetails()
},[])

const getDetails = () =>{
  const token = localStorage.getItem("token")
  let decoder = jwt_decoder(token)

  axios.get('/api/designer/'+decoder.id)
  .then(data=>{
    setUserDetails(data.data);
  })
}


  const logout=()=>{
   localStorage.removeItem("token");
     setIsLoggedIn(false)

 }



    return (
      <div>
      {(isLoggedIn===false) ? (<Redirect to ="/"/>):(
        <div>
        <div className="head">
        <h4 className="text-center">Welcome: {email}</h4>

          <button className="btn brn-primary" style={{textDecoration:"none"}} onClick={logout}>
            Log out
          </button>
          </div>
          <br/>
          <div className="card">
        <div className="card-header text-center">
          User Details
        </div>
        {userDetails.map((item)=>{
          return(
            <ul className="list-group list-group-flush">
            <li className="list-group-item">Capacity: {item.capacity} Hour/Week</li>
            <li className="list-group-item">Designer Type: {item.designer_type}</li>
            <li className="list-group-item">Education: {item.training}</li>
            </ul>

          )
        })}

      </div>
          </div>
          )}
      </div>
    );

}

export default DesignerProfile;
