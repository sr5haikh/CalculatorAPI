let op, op1=0, op2=0;

const input = document.querySelector("#input");

document.querySelector("#numbers").addEventListener("click",(e) =>{ input.value += e.target.innerHTML;})

document.querySelector("#operation").addEventListener("click",(e) =>{ input.value += e.target.innerHTML;})

document.querySelector("#ans").addEventListener("click",(e) =>{ input.value = eval(input.value);})

document.querySelector("#clr").addEventListener("click",(e) =>{ input.value =""})