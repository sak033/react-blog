import React, { use } from 'react'
import { useState, useEffect } from 'react';
import ClockStyle from './ClockStyle'
import Clock from "react-clock";

const ClockComponent = ({color}) => {
  const [time ,setTime]=useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setTime(new Date().toLocaleTimeString());
    },1000)
  }, []);

  return (
    <div>

      
      <h1 
      style={{color:color, backgroundColor:'#000', width:'120px', padding:'10px', borderRadius:'5px'}}
      >{time}</h1>
    </div>
  )
}

export default ClockComponent