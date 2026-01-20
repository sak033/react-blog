import { useState } from 'react'
import Photo from './assets/experience_img.png'


import { createElement } from 'react'
import JsxWithCurilyBraces from './JsxWithCurilyBraces'
import Functions from './Functions'
import StatesandHooks from './StatesandHooks'
import HideShow from './HideShow'
import MultipleComditionsWithState from './MultipleComditionsWithState'
import Props from './Props'
import Props_Array from './Props_Array'
import Props_ClickEvents from './Props_ClickEvents'
import DefaultProps from './DefaultProps'
import PassingHTMLUsingProps from './PassingHTMLUsingProps'
import GetInputFieldValue from './GetInputFieldValue'
import CheckBox from './CheckBOx'
import RadioButton_Dropdown from './RadioButton_Dropdown'


function App() {
  const [student, setStusent]=useState();

 // passing props as individual variables
  /*  let name= "Pushpa"
   let age=22;
   let email="email@test.com" */

   // passing props as object
   let userObject={
    name: "Pushpa",
    age: 22,
    email: "pushpa@gmail.com"
   }

   //passing props as array
   let userArray=["sakshi",21,"sakshi@gmail.com"]
  return(
   <div>
    <RadioButton_Dropdown/>
    <CheckBox/>
    <GetInputFieldValue/>
     <h1>Passing Html using props</h1>
     <PassingHTMLUsingProps color="yellow">
      <h1>Hello Everyone</h1>
     </PassingHTMLUsingProps>
     <PassingHTMLUsingProps>
      <h1 style={{color:"green"}}>My name is sakshi</h1>
     </PassingHTMLUsingProps>
      <h1>Use Of Default Props </h1>
     <DefaultProps name="pushpa"/>
     <DefaultProps  />
    {/* <Props name={name} age={age} email={email}/> */}
    <Props user={userObject}/>
    <Props_Array userArray={userArray}/>


    
   {student && <Props_ClickEvents student={student}/>}
   <button onClick={()=>{setStusent("sakshi")}}>Show student</button>


    <MultipleComditionsWithState/>
    <HideShow/>
    <img src={Photo} alt="sakshi Photo"  class="photo"/> 
    <ul>
      <li>Invent new traffic lights</li>
      <li>Rehearse a movie scene</li>
      <li>Improve the spectrum technoogy</li>
    </ul>
    <button onClick={()=>{alert("Function called")}}>Click me</button>
    <JsxWithCurilyBraces/>
    <Functions/>
    <StatesandHooks/>
   </div> 
  )
}
export default App
