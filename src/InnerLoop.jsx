import React from 'react'

const InnerLoop = ({data}) => {
  return (
    <div>
        <h1>College Name: {data.name}</h1>
        <ul>
            <li>City: {data.city}</li>
            <li>Website: {data.website}</li>
            <li>
                <h3>Srudents</h3>
            {
                data.student.map((student,index)=>(
                    <div key={index}>
                    <ul>
                      <li>Name: {student.name}</li>
                      <li>Age: {student.age}</li>
                    </ul>
                    </div>
                ))
            }
            </li>
            
        </ul>
    </div>
  )
}

export default InnerLoop