import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import Counter from './Counter';
import Login from './Login';
import Post from './Post';
import SignUp from './SignUp';
import ViewPost from './ViewPost';
import Register from './Register';
import CreatePost from './CreatePost';


const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<h1>Page not Found</h1>
  },
  {
    path:'/counter',
    element:<Counter></Counter>,
    errorElement:<h1>Page not FOund</h1>
  },
  {
    path:'/login',
    element:<Login></Login>,
    errorElement:<h1>Page not FOund</h1>
  },
  {
    path:'/post/:postId',
    element:<Post></Post>
  },
  {
    path:'/post',
    element:<ViewPost/>
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/createPost',
    element:<CreatePost></CreatePost>
  },
  // {
  //   path:'/logout',
  //   element:<Logout></Logout>
  // }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);


