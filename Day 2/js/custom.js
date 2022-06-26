"use strict";

// let x= 20;
// let y= 10;
// let z= 50;

// let a= x+y+z;
// let s= x-y-z;
// let m= x*y*z;

// console.log('ADDITION='+a+' SUBTRACTION='+s+' MULTIPICATION='+m)

// document.getElementById('demo').innerHTML="Hello";

let name=window.prompt("Enter your name="); //takes input from the user
let number=window.prompt("Enter your number=");
let address=window.prompt("Enter your address=");

document.getElementById('userinfo').innerHTML=`<p> My name is=${name} </p> <p>My phone number is=${number} </p> <p> I live in=${address}`;