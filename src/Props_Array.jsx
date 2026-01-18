import React from 'react'
import Props from './Props';

const Props_Array = (props) => {
    console.log(props);
  return (
    <div> 
        <hr />
        <h1>Passing data in Array using Props</h1>
        <h2>Name:{props.userArray[0]}</h2>
        <h2>Age:{props.userArray[1]}</h2>
        <h2>Email:{props.userArray[2]}</h2>
    </div>
  )
}

export default Props_Array