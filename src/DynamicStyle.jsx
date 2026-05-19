import React, { useState } from 'react'

const DynamicStyle = () => {
    const [color, setColor]=useState({
        color:'red'
    })

    function updateStyle(){
      if(color.color==='red'){
          setColor({color:'blue'})
      } 
      else{
        setColor({color:'red'})
      }
    }

    const [display, setDisplay]=useState(true);


    
  return (
    <div>

    <hr />
    <h1>Dynamic style</h1>
    <button style={color} onClick={updateStyle}>Click me</button>
    <button onClick={()=>setDisplay(!display)}>Toggle</button>
    <h1 style={{display: display?'block':'none'}}>Hey</h1>
    </div>
  )
}

export default DynamicStyle