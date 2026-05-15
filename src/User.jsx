import React from 'react'

const User = ({data}) => {
  return (
    <div style={{
        border: "1px solid green",
    padding: "10px",
    margin: "10px",
    width: "400px",
    borderRadius: "10px",
    }}>
        <h1>Id: <span style={{color:'green'}}>{data.id}</span></h1>
        <h1>Name: <span style={{color:'green'}}>{data.name}</span></h1>
        <h1>Email: <span style={{color:'green'}}>{data.email}</span></h1>
        <h1>Age: <span style={{color:'green'}}>{data.age}</span></h1>
    </div>
  )
}

export default User