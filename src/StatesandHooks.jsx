import React from 'react'
import { useState } from 'react'

const StatesandHooks = () => {
    /* let fruit="mango";

    const handleFruitChange=()=>{
        fruit="banana"
        console.log(fruit)
    }
 */


    const [fruit, setFruit]= useState("mango");
    const [count, setCount]= useState(0);

    const handleFruitChange=()=>{
        setFruit("banana")
    }
  return (
    <div>
        <h1>{fruit}</h1>
        <button onClick={handleFruitChange}>Change fruit name</button>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>update Count</button>
    </div>
  )
}

export default StatesandHooks;