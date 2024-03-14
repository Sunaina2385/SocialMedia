import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {

  const [item,setItem]=useState("");
  const [user,setUser]=useState("");
  const [loginError,setLoginError]=useState("");
  const [password,setPassword]=useState("");
  const Navigate= useNavigate();

  if(localStorage.getItem("jwtToken")){
    Navigate("/post");
  }

  const handleUser=(event)=>{
    setUser(event.target.value);
  }

  const handlePassword=(event)=>{
    setPassword(event.target.value);
  }


  const handleSubmit=async(event)=>{
    
    try{
      event.preventDefault();
      const res=await axios.post("http://localhost:8000/login",{
        username:user,
        password:password
      });

      if(res.status==201){
        localStorage.setItem("jwtToken",res.data.token);
        Navigate("/post");
      }
    }
    catch(e){
      console.log(e);
      alert("Invalid Username or Password");
    }
  }

  return (
    <>
      {/* <h1>Login Component</h1> */}
      <div className="images">
        <img src="https://www.seekpng.com/png/full/13-135833_graphic-royalty-free-transparent-world-social-media-social.png" alt="image"/>
      </div>
      <div className='login-container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>

        <label>Username:</label>
        <input type="text" value={user} placeholder='Enter your Username' onChange={handleUser} required/>
        <label>Password:</label>
        <input type="password" value={password} placeholder='Enter Password Here' onChange={handlePassword} required/>

        <button type="submit">Login</button>
        <Link to="/register">Register</Link>
      </form>
      <h2>{loginError}</h2>
      </div>
    </>
  )
}

export default Login;
