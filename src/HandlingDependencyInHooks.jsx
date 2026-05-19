import React, { useEffect, useState } from 'react'
import PropsSideEffectInHook from './PropsSideEffectInHook';

const HandlingDependencyInHooks = () => {
    const [count, setCount]=useState(0);
    const [data, setData]=useState(0);

    useEffect(()=>{
        hello();
    },[count, data]);

    function hello(){
        console.log("Hello");
    }
  return (
    <div>
        <hr />
        <h1>Handling Dependency In Hooks</h1>

        <button onClick={()=>setCount(count+1)}>Counter{count}</button>
        <button onClick={()=>setData(data+1)}>Data{data}</button>

        <PropsSideEffectInHook count={count} />
        <hr />
    </div>
  )
}

export default HandlingDependencyInHooks