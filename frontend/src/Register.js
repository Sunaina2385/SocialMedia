import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import "./Login.css";

const Register = () => {

    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const Navigate= useNavigate();

    const handleUser=(event)=>{
      setUser(event.target.value);
    }
  
    const handlePassword=(event)=>{
      setPassword(event.target.value);
    }
  
  
    const handleSubmit=async(event)=>{
      event.preventDefault();
      try{
        const result=await axios.post("http://localhost:8000/register",{username:user,password:password});
        // console.log(result);
        if(result.status===201){
            Navigate("/login");
        }
      }
      catch(err){
        console.log(err);
      }
    }
  
    return (
      <>
      <div className="images">
        <img src="https://www.seekpng.com/png/full/13-135833_graphic-royalty-free-transparent-world-social-media-social.png" alt="image"/>
      </div>
      <div className='login-container'>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>

        <label>Username:</label>
        <input type="text" value={user}placeholder='Enter your Username' onChange={handleUser} required/>
        <label>Password:</label>
        <input type="password" value={password} placeholder='Enter Password Here' onChange={handlePassword} required/>

        <button>Register</button>
      </form>
      </div>
    </>
    )
}

export default Register;

/*
        
        <form onSubmit={handleSubmit}>
  
          <label>Username:</label>
          <input type="text" value={user}placeholder='Enter your Username' onChange={handleUser}/>
          <label>Password:</label>
          <input type="password" value={password} placeholder='Enter Password Here' onChange={handlePassword}/>
  
          <button>Submit</button>

        </form>
      </>
*/
