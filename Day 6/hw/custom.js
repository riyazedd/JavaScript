"use strict";

function details(){
    let n1= document.getElementById('name').value
    let n2= document.getElementById('mail').value
    let n3= document.getElementById('password').value
    let n4= document.getElementById('number').value
    
    document.getElementById('info').innerHTML=`<h1>Your Details:</h1>Name: ${n1} <br> Email: ${n2} <br> Number: ${n4}`;
    document.getElementById('name').value='';
    document.getElementById('mail').value='';
    document.getElementById('number').value='';
    document.getElementById('password').value='';
}

function clearValue(){
    document.getElementById('info').innerHTML='';
}