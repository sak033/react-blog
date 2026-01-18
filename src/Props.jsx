import React from 'react'


// passing props as individual variables
/* const Props = ({name, age, email}) => {
   
  return (
    <div>
   <h1>Props Component</h1>
    <h2>Name: {name}</h2>
    <h2>Age: {age}</h2>
    <h2>Email: {email}</h2>
    </div>
  )
} */


  // passing props as object
const Props = (user) => {
    return (
    <div>
        <hr className='hr'/>
    
    <h2>Name:{user.user.name}</h2>
    <h2>Age:{user.user.age}</h2>
    <h2>Email:{user.user.email}</h2>
    </div>
    )
}

export default Props