import React, { useState } from 'react'
import ClockComponent from './ClockComponent'

const ClockStyle = () => {
  const [color, setColor]=useState("green");
  return (
    <div>
      <hr />
      <h1>Digital Clock in react js</h1>
      <select name="" id=""  onChange={(e)=>setColor(e.target.value)}>
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="blue">blue</option>
        <option value="yellow">yellow</option>
      </select>
      <ClockComponent color={color}/>
     <hr />
    </div>

  )
}

export default ClockStyle