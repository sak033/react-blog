import React, { use } from 'react'
import { useState } from 'react'
import HideShowComponent from './HideShowComponent';

const HideShow = () => {
    const[display, setDisplay]=useState(true);
  return (
    <div>
        <hr />
        <h1>Toggle in react.js</h1>

        {/* // conditional rendering 
        {
            display ? <h1>Sakshi Kuthe</h1> : null
        } */}

        <button onClick={()=>setDisplay(!display)}>Toggle</button>
    

    {
        display ? <HideShowComponent /> : null
    }
    </div>
  )
}

export default HideShow