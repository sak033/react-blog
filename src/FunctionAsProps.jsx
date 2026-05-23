import React from 'react'
import ChiledComponentTo_ReceiveFunctionProps from './ChiledComponentTo_ReceiveFunctionProps'

const FunctionAsProps = () => {
    const displayFunction=(name)=>{
        alert(name)
    }
  return (
    <div>
        <h1>Passing function as Props</h1>
        <ChiledComponentTo_ReceiveFunctionProps display={displayFunction}/>
    </div>
  )
}

export default FunctionAsProps