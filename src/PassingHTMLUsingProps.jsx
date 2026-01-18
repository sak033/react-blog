import React from 'react'

const PassingHTMLUsingProps = ({children, color}) => {
  return (
    <div style={{color:color,border:"2px solid blue", margin:"10px", padding:"10px"}}>
        {children}
    </div>
  )
}

export default PassingHTMLUsingProps