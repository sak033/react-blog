import React, { useEffect } from 'react'
import HandlingDependencyInHooks from './HandlingDependencyInHooks'

const PropsSideEffectInHook = ({count}) => {
   

    useEffect(()=>{
     sakshi();
    },[]);
    function sakshi(){
        console.log("hello sakshi");
    }

    
  return (

    <div>
        <h1>Props Side Effect In Hook {count}</h1>
    
    </div>
  )
}

export default PropsSideEffectInHook