import React  from 'react';
import jwt_decode from 'jwt-decode';
import {Redirect} from 'react-router-dom';

const Auth = () =>{

  const token = localStorage.getItem("token")
  let decode = jwt_decode(token)
  let url = `${decode.role}-profile`

  return(
    <div>
    <Redirect to={url}/>
    </div>
  )

}
export default Auth;
