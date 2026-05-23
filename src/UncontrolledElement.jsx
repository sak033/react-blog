import React from 'react'
import {useRef} from 'react';

const UncontrolledElement = () => {
    const userRef=useRef();
    const passwordRef=useRef();

    const handleForm=(event)=>{
         event.preventDefault();

         const user=document.querySelector("#user").value;
         const password=document.querySelector("#password").value;


         console.log(user,password);

    }


    const handleFormRef=(event)=>{
        event.preventDefault();

        const user=userRef.current.value;
        const password=passwordRef.current.value;

        console.log("Uncontrolled Conponent using useRef Hook", user , password);
    }

  return (
    <div>
        <hr />
        <h1>Uncontrolled Element</h1>
        <form action="" onSubmit={handleForm}>
            <input type="text" id='user' placeholder='enter user name' />
            <br /><br />
            <input type="password" id='password' placeholder='enter password' />
            <br /><br />
            <button>
                submit
            </button>
        </form>
        <hr />
        <h1>Uncontrolled Component with useRef</h1>
        <form action="" onSubmit={handleFormRef}>
            <input type="text" ref={userRef} placeholder='enter user name' />
            <br /><br />
            <input type="password" ref={passwordRef}  placeholder='enter password' />
            <br /><br />
            <button>
                submit
            </button>
        </form>
        <hr />
    </div>
  )
}

export default UncontrolledElement