import React, { useState } from 'react'
import Image from './assets/experience_img.png'
import PersonData from './PersonData'
import styles from './DynamicStyleTask.module.css'

const DynamicStyleTask = ({data}) => {
    const [display, setDisplay]=useState(true);
return (
    <div>
        <hr />
       
         <h1 className={styles.heading}>Dynamic style Task</h1>
         <button onClick={()=>setDisplay(!display)}>Toggle</button>

         {
            data.map((person, index)=>(
                <div key={index}>

        <div style={{border: '2px solid red', width:'200px', marginBottom:'2px', display: display? 'flex':'block'}}>
            <div style={{border: '2px solid gray', width:'100px' }}><img src={Image} alt="" style={{width:'100px', height:'100px'}}/></div>
            <h3>Name: {person.name}</h3>
            <h3>Age: {person.age}</h3>
        </div>

        </div>    
            ))
         }

        <hr />
    </div>
  )
}

export default DynamicStyleTask