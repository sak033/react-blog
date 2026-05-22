import React from 'react'
import {useRef} from 'react';
import Button from 'react-bootstrap/Button';

const UseRef_Hook = () => {
 const inputRef=useRef(null);
 const h3Ref=useRef(null);

 function showReferenceFor_inputField(){
  console.log(inputRef);
  inputRef.current.focus();
  inputRef.current.style.color='red';
  inputRef.current.placeholder="enter your name";

 }

function toggleHandler(){
  if(inputRef.current.style.display!='none'){
    inputRef.current.style.display='none'
  }
  else{
    inputRef.current.style.display='inline'
  }
}

function h1Handler(){
  h3Ref.current.style.color='red';
}

  return (
    <div>
      <hr />
        <h1>
            Use of useRef Hook
        </h1>
        <input ref={inputRef} type='text' placeholder='Enter user Nmae'/>
        <button onClick={showReferenceFor_inputField}>Click me</button>

        <Button onClick={toggleHandler} variant="outline-primary">Primary</Button>

        <div>
            <h3 ref={h3Ref}>Hello my name is sakshi</h3>
           <Button onClick={h1Handler} variant="outline-primary">Primary</Button>
        </div>
         
    </div>
  )
}

export default UseRef_Hook