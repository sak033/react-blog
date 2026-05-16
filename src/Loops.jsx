import React from "react";
import { useState } from "react";

const Loops=()=>{
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

      return(
        <div>
            <hr />
           <table border="1">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
                {
                    userData.map((user)=>(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                </tr>
                    ))
                }
            </tbody>
           </table>

            <h1>Dummy Data</h1>
            <table border="1">
                <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Age</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Sakshi</td>
                    <td>sakshi@gmail.com</td>
                    <td>29</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Sakshi</td>
                    <td>sakshi@gmail.com</td>
                    <td>29</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Sakshi</td>
                    <td>sakshi@gmail.com</td>
                    <td>29</td>
                </tr>
            </tbody>
            </table>
            
            <br />

            <hr />
        </div>
      )
}

export default Loops;
