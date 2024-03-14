import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import "./CreatePost.css";


const CreatePost = () => {

  const Navigate=useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("jwtToken")){
      Navigate("/createPost");
    }
    else{
      Navigate("/login");
    }
  },[])

  const [title,setTitle]=useState("");
  const [content,setContent]=useState("");

  const handleTitle=(event)=>{
    setTitle(event.target.value);
  }

  const handleContent=(event)=>{
    setContent(event.target.value);
  }

  const handleSubmit=async(event)=>{
    
    try{
      event.preventDefault();
      const response=await axios.post("http://localhost:8000/posts",{
        title:title,
        content:content
      },{
        headers:{
          authorization:"Bearer "+localStorage.getItem("jwtToken")
        }
      })
      // console.log(response);
      Navigate("/post");
    }catch(error){
      console.log(error);
    }
  }

  return (
    <>
      <div className="images">
        <img src="https://assets-global.website-files.com/5f4e0a3df7575afdf0a54883/640782f5fabba4d2b7c5e4d9_Blog_post_1_Create-app.png" alt="image"/>
      </div>
      <div className='login-container'>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>

        {/* <div className="form-group"> */}
          <label>Title:</label>
          <input type="text" placeholder="Add Title" value={title} onChange={handleTitle} required />
        {/* </div> */}

        {/* <div className="form-group"> */}
          <label>Content:</label>
          <textarea placeholder="Add Content" value={content} onChange={handleContent} required />
        {/* </div> */}

        <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default CreatePost;
