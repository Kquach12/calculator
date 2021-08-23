let displayValue = document.querySelector("#display").innerText;

let holder = 0;

let addition = false
let subtraction = false
let multiplication = false
let division = false

// function changeColor(element){
//     console.log("hello");
//     element.style.backgroundColor = "silver";
// }


function press(value){
    if (displayValue == 0){
        displayValue = "";
    }

    displayValue = "" + displayValue + value;
    document.querySelector("#display").innerText = displayValue;
}


function clr(){
    displayValue = 0;
    holder = 0;
    document.querySelector("#display").innerText = displayValue;
}


function setOP(value){
    holder = displayValue.slice();
    console.log(holder);
    displayValue = 0;

    if (value == "+"){
        addition = true;
    } else
    if (value == "-"){
        subtraction = true;
    } else
    if (value == "*"){
        multiplication = true;
    } else
    if (value == "/"){
        division = true;
    }
}

function calculate(){
    if (addition == true){
        displayValue = Number(holder) + Number(displayValue);
    } else
    if (subtraction == true){
        displayValue = Number(holder) - Number(displayValue);
    } else
    if (multiplication == true){
        displayValue = Number(holder) * Number(displayValue);
    } else
    if (division == true){
        displayValue = Number(holder) / Number(displayValue);
    }


    document.querySelector("#display").innerText = Math.round(displayValue * 1000000) / 1000000;

    console.log(holder);

    addition = false;
    subtraction = false;
    multiplication = false;
    division = false;


    displayValue = "0";
    console.log(displayValue);
}