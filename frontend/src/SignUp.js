import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const SignUp = () => {
    
    const Navigate=useNavigate();
    return (
        <>
        {/* <h1>Login Component</h1> */}
        <h1>SignUp</h1>
        <form>
            <input type="text" placeholder='Enter Your Name'/>
            <input type="email" placeholder='Enter Your Email'/>
            <input type="password" placeholder='Enter Your Password'/>

            <button onClick={()=>{Navigate("/Login")}}>SignUp</button>
            <Link to="/Login">Login</Link>
        </form>
        </>
    )
}

export default SignUp;
