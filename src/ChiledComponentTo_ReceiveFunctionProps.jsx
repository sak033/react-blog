import React from 'react'

const ChiledComponentTo_ReceiveFunctionProps = ({display}) => {
    const name="sakshi"
  return (
    <div>
        <button onClick={()=>display(name)}>Click me</button>
    </div>
  )
}

export default ChiledComponentTo_ReceiveFunctionProps