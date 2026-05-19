import React from 'react'
import DynamicStyleTask from './DynamicStyleTask'

const PersonData = () => {
    const personData=[
            {
                name:"sakshi",
                age:22
            },
            {
                name:"prachi",
                age:23
            },
            {
                name:"payal",
                age:25
            },
            {
                name:"kajal",
                age:29
            }
        ]
  return (
    <div>
       <DynamicStyleTask data={personData}/>
    </div>
  )
}

export default PersonData