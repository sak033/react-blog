import React from 'react'
import { useState } from 'react'

const MultipleComditionsWithState = () => {

    const [count, setCount]=useState(0);

  return (
    <div>
        <hr />
        <h1>Count: {count}</h1>
   <button onClick={()=>setCount(count+1)}>Counter</button>
        {
           count===0 ? <h1>condition 1</h1> 
           :count===1 ?<h1>condition 2</h1>
           :count===2 ? <h1>condition 3</h1>
           :<h1>condition default</h1> 
        }
    </div>


  )
}

export default MultipleComditionsWithState