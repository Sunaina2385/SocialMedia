import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [count,setCount]=useState(0);

  //Mounting Phase
  useEffect(()=>{
    console.log("Component Mounted");
    return function(){
        console.log("exit...");
    }
    
  },[]);

  //Updating Phase
  useEffect(()=>{
    if(count>0){
        console.log("Component Updated");
        setCount(count+2);
    }
    
  },[count]);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>{
        setCount(count+1);
      }}>+</button>
      <button onClick={()=>{
        setCount(count-1);
      }}>-</button>
    </div>
  )
}

export default Counter;
