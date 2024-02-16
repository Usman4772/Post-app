import React from "react";
let a,b;
function sum(a,b){
return a+b
}

function subtract(a,b){
    return a-b
}
function multiply(){
    return a*b
}
function division(a,b){
    return Math.round(a/b)
}
function askValues(){
    a=Number(prompt("Enter first Number"))
    b=Number(prompt("Enter second Number"))
}
askValues()

function Calculator(){
return(
    <React.Fragment>
<h1>Sum is : {sum(a,b)}</h1>
<h1>Substraction is : {subtract(a,b)}</h1>
<h1>Multiplication is : {multiply(a,b)}</h1>
<h1>Division is : {division(a,b)}</h1>

</React.Fragment>
)

}
export default Calculator