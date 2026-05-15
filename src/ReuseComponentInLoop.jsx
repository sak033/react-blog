import React from 'react'
import User from './User'

const ReuseComponentInLoop = () => {
    const userData=[
        {
            name:"sakshi kuthe",
            age: '29',
            email:"sakshi@gmail.com",
            id:"1"
        },
        {
            name:"swapnil kuthe",
            age: '21',
            email:"sakshi@gmail.com",
            id:"2"
        },
        {
            name:"naresh kuthe",
            age: '49',
            email:"sakshi@gmail.com",
            id:"3"
        },
        {
            name:"anita kuthe",
            age: '47',
            email:"sakshi@gmail.com",
            id:"4"
        }
      ]
  return (
    <div>
        
        <h1>Reuse Component In Loop</h1>
        {
            userData.map((user)=>(
                <div key={user.id}>
                    <User data={user}/>
                 </div>   
            ))
        }

    </div>
    

  )
}

export default ReuseComponentInLoop