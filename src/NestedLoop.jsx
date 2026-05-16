import React from 'react'
import InnerLoop from './InnerLoop'

const NestedLoop = () => {
    const collegeData=[
        {
            name:"WCEM",
            city:"Nagpur",
            website:"www.wcem.com",
            student:[
                {
                    name:"sakshi",
                    age:"22"
                },
                {
                    name:"Payal",
                    age:"21"
                },
                {
                    name:"Pushpa",
                    age:"23"
                }
            ]
        },
        {
            name:"KDK",
            city:"Pune",
            website:"www.kdk.com",
            student:[
                {
                    name:"sakshi",
                    age:"22"
                },
                {
                    name:"Payal",
                    age:"21"
                },
                {
                    name:"Pushpa",
                    age:"23"
                }
            ]
        },
        {
            name:"YCC",
            city:"Mumbai",
            website:"www.wcem.com",
            student:[
                {
                    name:"sakshi",
                    age:"22"
                },
                {
                    name:"Payal",
                    age:"21"
                },
                {
                    name:"Pushpa",
                    age:"23"
                }
            ]
        }
    ]
  return (
    <div>
        <hr />
        <h1>Nested Loop</h1>
        {
            collegeData.map((college, index)=>(
             <div key={index}>
              <InnerLoop  data={college}/>
             </div>   
            ))
        }
       <hr /> 
    </div>
  )
}

export default NestedLoop