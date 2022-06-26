"use strict";
/*
let a=100;
let b=20;

if (a>b){
    console.log("A is greater than B.");
}

else{
    console.log("B is greater then A.");
}

let user= 'riyaz';
let pass= 'hello';

if (user==='riyaz' && pass==='hello'){
    console.log(`Welcome ${user}`);
}
else{
    console.log("Username and password incorrect.");
}

// --------------------------

let nep= 78;
let math=63;
let soc=54;
let sci=70;
let comp=88;

let total=nep+math+soc+sci+comp;
let per=total/5;

console.log(`Total marks obtained=${total} and percentage obtained=${per}`);

if(per>35 && per<45){
    console.log("Division= Third");
}
else if(per>45 && per<60){
    console.log("Divison= Second");
}
else if(per>60 && per<80){
    console.log("Divison= First");
}
else{
    console.log("Division= Top");
}
*/

//for displaying values 
function dis(val){
    document.getElementById("edu").value+=val
}
// for evaluation
function solve(){
    let x= document.getElementById("edu").value
    let y= eval(x)
    document.getElementById("edu").value=y
}
// for clearing the display
function clr(){
    document.getElementById("edu").value=""
}