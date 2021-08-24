let displayValue = document.querySelector("#display").innerText;    //On the display screen; will be used thoughout
let holder = [];                                                    //Stores the previous value(s)
let calculateString = "";                                           //Will loop holder values into this one string


function press(value){                                              
    if (displayValue == 0){
        displayValue = "";                                          //Ensures that 0 will not be in the front of our value
    }

    if (holder[holder.length -1] !== "+" && holder[holder.length -1] !== "-" &&  //Used to see if the holder's stored value needs to be reset after a value is calculated
    holder[holder.length -1] !== "*" && holder[holder.length -1] !== "/"){
        holder = [];
    }

    displayValue = "" + displayValue + value;                       
    document.querySelector("#display").innerText = displayValue;    //Turns the number into a string and displays it
}


function clr(){
    displayValue = 0;                                               //Clears everything
    holder = [];
    calculateString = "";
    document.querySelector("#display").innerText = displayValue;
}


function setOP(value){                                              //The IF statement allows us to keep going after calculating and makes our holder array clean
    if (displayValue === ""){
        holder.push(value)
    }else {
        holder.push(displayValue, value);                           //Pushes value and operator into the array
    }

    console.log(holder);
    displayValue = 0;
}

function calculate(){
    holder.push(displayValue);                                      //Pushes last value into holder bc it will not be picked up ny setOP
    console.log(holder);

    for (let i = 0; i < holder.length; i++){
        calculateString += holder[i];                               //Array -> string
    }

    console.log(calculateString);
    
    displayValue = Math.round(eval(calculateString) * 1000000) / 1000000       //Calculate the string and round it to 6 decimals

    document.querySelector("#display").innerText = displayValue;

    holder = [displayValue];                                        //Stores value so we can keep calculating 
    calculateString = "";                                           //resets displayValue and string after calculation
    displayValue = "";
    console.log(displayValue);
}