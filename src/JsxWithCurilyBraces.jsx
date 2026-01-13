import React from "react";

function JsxWithCurilyBraces() {
    const name="sakshi kuthe"
    const surname=undefined;
    const object={
        name: "sakshi",
        surname: "kuthe",
        age: 22,
        city: "pune",


    }

    const userArray=['sakshi', 'rahul', 'amol', 'sneha'];
    let a=10;
    let b=30;
    function greet(){
        return "hello world"
    }
    function add(a,b){
        return a+b
    }

    function operation(a,b, op){
        if (op=="+"){
            return a+b
        }
        else if(op=="-"){
            return a-b
        }
        else{
            return "invalid operation"
        }
    }
    return(
    <div>
        <h1>{name}</h1>
        <h1>{a*b}</h1>
        <h1>{greet()}</h1>
        <h1>{add(10,20)}</h1>
        <h1>{operation(29,34,"*")}</h1>
        <h1>{surname?surname:"no surname found"}</h1>
        <h1>{object.name}</h1>
        <h1>{userArray[2]}</h1>
</div>
    )
}

export default JsxWithCurilyBraces;