import React from 'react'
import  { useState } from 'react'

const GetInputFieldValue = () => {
    const [name, setName]=useState(" ");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
  return (
    <div>
        <form action="">
        <h1>Get Input Field Value</h1>
        <input type="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter name' />
        <br /> <br />
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' />
        <br /><br />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='enter password' />
        <br /><br />
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{password}</h1>
        <button onClick={()=>{setName(" ");setEmail(" ");setPassword("")}}>Submit</button>
        <hr />
        </form>
    </div>
  )
}

export default GetInputFieldValue