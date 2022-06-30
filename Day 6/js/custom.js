"use strict";

// ----------FUNCTION----------

// function introduction(){
//     console.log("Hello World");
// }

// introduction();

// -----------------------

// function number(x,y){
//     console.log(x + y)
//     console.log(x - y)
//     console.log(x * y)
//     console.log(x / y)
// }

// number(20,30)

// ------------------------------

function addNumber(){
    let n1=parseInt(document.getElementById('num1').value);
    let n2=parseInt(document.getElementById('num2').value);
    document.getElementById('result').value=n1+n2;
}

function clearNumber(){
    document.getElementById('num1').value='';
    document.getElementById('num2').value='';
    document.getElementById('result').value='';
}