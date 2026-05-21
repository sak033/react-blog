import React from 'react'
import styled from "styled-components"

const StyledComponent = () => {

     const Heading=styled.h4`
    color:red;
    background-color:yellow;
    border:1px solid gray;
    `

     const Button=styled.button({
    color:'blue',
    backgroundColor:'gray',
    border:'1px solid gray',
    borderRadius:'3px'
     })

  return (
    <div>
        <hr />
        <h1>Styled Component</h1>
       <Heading>Hello this is me Sakshi</Heading>
       <Button> Know more about me</Button>
    </div>
  )
}

export default StyledComponent