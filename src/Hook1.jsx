import React, { useState } from 'react'
import LifeCycleMethods from './LifeCycleMethods';

const Hook1 = () => {
    const[counter, setCounter]=useState(0);
    const [display, setDisplay]=useState(true);


    function call(){
        console.log("Hello");
    }

    
  return (
    <div>
    <hr />
    {
      display? <LifeCycleMethods counter={counter}/>:null
    }
    <h1>First Hook with state</h1>   
   <button onClick={()=>setCounter(counter+1)} >Count{counter}</button>
   
   <button onClick={()=>setDisplay(!display)}>toggle</button>
    </div>
  )
}

export default Hook1