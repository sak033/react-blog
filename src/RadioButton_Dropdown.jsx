import React from 'react'
import { useState } from 'react'

const RadioButton_Dropdown = () => {
  const [gender, setGender]=useState("male")
  const [city, setCity]=useState('Pune')
  return (
    <div>
      <h1>Handle Radio and Dropdown</h1>
      <h4>Select Gender</h4>
      <input type="radio" checked={gender=='male'} value={"male"} onChange={(e)=>setGender(e.target.value)} name="gender" id="male"/>
      <label htmlFor="male">Male</label>
      <input type="radio" checked={gender=='female'} value={"female"} onChange={(e)=>setGender(e.target.value)} name="gender" id="female" />
      <label htmlFor="female">Female</label>

      <h2>Selected Gender:{gender}</h2>
      <br />
      <br />
      <h4>Select city</h4>
       <select onChange={(e)=>setCity(e.target.value)} defaultValue={"pune"}>
        <option value="noida"  >Noida</option>
         <option value="nagpur"  >Nagpur</option>
          <option value="pune" >Pune</option>
       </select>
       
       <h2>Selected city:{city}</h2>
      <hr />
    </div>
  )
}

export default RadioButton_Dropdown