import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./ViewPost.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Logout from './Logout';
import CardMed from './CardMed';

const ViewPost = () => {
    const [err,isError]=useState(false);
    const [data,setData]=useState([]);
    const [isLoading,setLoading]=useState(true);
    const Navigate=useNavigate();

    useEffect(()=>{
        //Immediately Invoked function
        if(localStorage.getItem("jwtToken")){
            (async()=>{
                try{
                    const responseData=await axios.get("http://localhost:8000/posts",{
                        headers:{
                            authorization:"Bearer "+ localStorage.getItem("jwtToken")
                        }
                    })

                    setData(responseData.data);
                    setLoading(false);
                    
                }
                catch(error){
                    isError(true);
                }
            })()
        }
        else{
            Navigate("/login");
        }
        
    },[]);

    if(err){
        return <h1>Something Went Wrong</h1>
    }

    return (
        <div className="container">
            <div className='navbar'>
                <h1>Posts</h1>
                <input type="text" placeholder='Search' className='headerSearch'/>
                <div>
                    <Link className="link" to="/createPost">Create Post</Link>
                    <Link className='link' to="/logout">Logout</Link>
                </div>
            </div>

            <div className='postsCont'>
            {
            (isLoading) ? <h1 className="loading">Loading</h1> : data.map((post)=>{
                return(
                    <div className='postsDiv'>
                    <CardMed title={post.title} content={post.content} className="postDivs"></CardMed>
                    </div>
                )
            })
            
            }
            </div>
        </div>
    )
}

export default ViewPost;


/*
// <div className="post" >
                    //     <div>
                    //         <h1 key={post.id} className="post-title" >{post.title}</h1>
                    //         <p className="post-content" >{post.content}</p>
                    //     </div>

                    //     <div className='postdiv'>
                    //         <Link className="btn btn-success link1"  to="/editPost">Edit</Link>
                    //         <Link className="btn btn-danger link1" to="/delete">Delete</Link>
                    //     </div>
                    // </div>
*/