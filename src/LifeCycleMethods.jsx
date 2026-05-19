import React, { useEffect, useState } from 'react'
import Hook1 from './Hook1'


const LifeCycleMethods = ({counter}) => {

   
    useEffect(()=>{
        console.log("Mounting");
    },[]);

    useEffect(()=>{
        console.log("Updating");
    },[counter]);

    useEffect(()=>{

        return()=>{
            console.log("Unmounting")
        }
    },[]);

  return (
    <div>
        <hr />
        <h1>Life Cycle Methods</h1>
       <h3>Count{counter}</h3>
       

        <hr />
    </div>
  )
}

export default LifeCycleMethods