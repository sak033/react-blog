import React from 'react'
import {useState} from 'react'

const CheckBox = () => {
    const [skills, setSkills]=useState([])

    const handleSkills=(e)=>{
   console.log(e.target.value, e.target.checked)
   if(e.target.checked){
    setSkills([...skills,e.target.value])//spread operator---for check
   }else{
      //for uncheck---filter function
      setSkills([...skills.filter((item)=>item!=e.target.value)])
   }
    }
  return (
    <div>
        <h1>Select youre skills</h1>
        <input onChange={handleSkills} type="checkbox" id="php" value="php" />
        <label htmlFor="php">PHP</label>
        <br />
        <br />
        <input onChange={handleSkills} type="checkbox" id="js" value="js"/>
        <label htmlFor="js">JS</label>
        <br />
        <br />
        <input onChange={handleSkills} type="checkbox" id="node" value="node"/>
        <label htmlFor="node">Node</label>

       <h1>{skills.toString()}</h1>
        <hr />
    </div>
  )
}

export default CheckBox