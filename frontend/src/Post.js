import React from 'react'
import { useParams,Link} from 'react-router-dom'

const Post = () => {
    
    const params=useParams();
    console.log(params);
    return (
        <>
            <h1>Posts {params.postId} </h1>
            <Link to="/Login">Logout</Link>
        </>
  )
}

export default Post;
