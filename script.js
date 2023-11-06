let price = document.getElementById("price");
let button = document.getElementById("button");
let vat = document.getElementById("vat");
let numberP = document.getElementById("numberP");
let button2 = document.getElementById("button2");
let result = document.getElementById("result");

button.addEventListener("click",()=> {
    let vatSAR= 15/100;
    vat.innerText =price.value*vatSAR;
})

button2.addEventListener("click",()=> {
    result.innerText = price.value / numberP.value;
})