import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import './App.css'; // Import your CSS file for styling
import { image,image1,image2} from './Images'; 
import "./footer.css";

const App = () => {
   const Navigate = useNavigate();

   return (
      <div className="app-container">
         <div className='logo1'>
               <img src={image2} alt="logo"/>
               <h5>BuzzVibe</h5>
         </div> 

         <div className="animation-container">
            <TypeAnimation
               sequence={[
                  'Welcome to our social media app!',
                  1000,
                  'Stay connected with friends',
                  1000,
                  'Share your moments',
                  1000,
                  'Discover new interests.',
                  1000,
                  'Engage with communities.',
                  1000,
                  'Find inspiration.',
                  1000,
                  'Connect with like-minded people.',
                  1000,
                  'Create lasting memories.',
                  1000,
               ]}
               wrapper="span"
               speed={50}
               style={{ fontSize: '50px', display: 'inline-block',color:'white',display:'inline-block',textShadow:"1px 1px 20px #000" }}
               repeat={Infinity}
            />
         </div>
         <div className="background-image">
            <img src={image} alt="image"/>
            <img src={image1} alt="image"/>
         </div>
         <div className="buttons-container">
            
            <Link to="/login" className="button">Login</Link>
            <button className="button" onClick={() => { Navigate("/register") }}>Register</button>
            {/* <Link to="/post/1234" className="button">Post</Link> */}
         </div>
         <div>
         <footer class="footer">
                <div class="copyright">
                    &copy; 2024 Your Social Media App. All rights reserved.
                </div>
            </footer>
         </div>
      </div>
   );
};

export default App;


