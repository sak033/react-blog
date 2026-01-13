import React from 'react';

const arrowCall=()=>{
    alert(" arrow function")
}
function Functions(){
    function Call(){
        alert("Function called from Function component")
    }

    //arrow function
    /* const arrowCall=()=>{
        alert("Function called from arrow function")
    }
 */
    //function with parameters

    function Name(name){
        alert("Hello "+name);
    }


return(
    <div>
        <h1>This is a function component</h1>
        <button onClick={Call}>Click me</button>
        <button onClick={arrowCall}>Click me - arrow function</button>
    
        <button onClick={()=>Name("Sakshi Kuthe")}>Click me - function with parameter</button>
    </div>
);

}
export default Functions;