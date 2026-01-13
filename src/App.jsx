import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Photo from './assets/experience_img.png'
import viteLogo from '/vite.svg'
import './App.css'
import { createElement } from 'react'
import JsxWithCurilyBraces from './JsxWithCurilyBraces'
import Functions from './Functions'
import StatesandHooks from './StatesandHooks'

function App() {
 
  return(
   <div>
    <h1>Sakshi kuthe</h1>
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
