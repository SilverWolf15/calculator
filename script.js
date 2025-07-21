let num1 = "";
let num2 = "";
let op = "";
let opFlag = false;
let decimalFlag = false;

function add(n1, n2) {
    num1 = n1+n2;
    num2 = "";
}

function subtract(n1, n2) {
    num1 = n1-n2;
    num2 = "";
}

function multiply(n1, n2) {
    num1 = n1*n2;
    num2 = "";
}

function divide(n1, n2) {
    if(n2===0) {
        alert("Division by zero is not allowed.");
        clear();
        return;
    }
    num1 = n1/n2;
    num2 = "";
}

function operate() {
    n1 = parseFloat(num1);
    n2 = parseFloat(num2);
    switch(op) {
        case '+' :{
            add(n1, n2);
            break;
        }
        case '-' :{
            subtract(n1, n2);
            break;
        }
        case '*' :{
            multiply(n1, n2);
            break;
        }
        case '/' :{
            divide(n1, n2);
            break;
        }
    }
    op = "";
    decimalFlag = false;
    updateDisplay(num1);
}

function updateDisplay(num) {
    display.textContent = num;
}

function clear() {
    num1 = "";
    num2 = "";
    op = "";
    opFlag = false;
    decimalFlag = false;
    updateDisplay("0");
}

function numberModification(operation) {
    if(typeof num1 == "string" && opFlag == false) {
        num1 = (operation === "sign") ? ((num1.at(0) === '-') ? num1.slice(1) : "-" + num1) : num1.concat(".");
        updateDisplay(num1);
    } else {
        num2 = (operation === "sign") ? ((num2.at(0) === '-') ? num2.slice(1) : "-" + num2) : num2.concat(".");
        updateDisplay(num2);
    }
}

let display = document.querySelector(".display");
let inputs = document.querySelectorAll("button.inputs");
let operator = document.querySelectorAll("button.operators");
let decimal = document.querySelector(".decimal");
let sign = document.querySelector(".sign");
let ac = document.querySelector(".clear");
let evaluate = document.querySelector(".equal");

inputs.forEach(element => {
    element.addEventListener('click', () => {
        if(opFlag == false) {
            num1 += element.textContent;
            updateDisplay(num1);
        } else {
            num2 += element.textContent;
            updateDisplay(num2);
        }
    });
});

operator.forEach( element => {
    element.addEventListener('click', () => {
        if(num2 !== "" && op !== "")
            operate();
        op = element.textContent;
        opFlag = true;
        decimalFlag = false;
        
    })
});

decimal.addEventListener('click', () => {
    if(decimalFlag == false) {
        numberModification("decimal");
        decimalFlag = true;
    }
});

sign.addEventListener('click', () => {
    numberModification("sign");
});

ac.addEventListener('click', clear);

evaluate.addEventListener('click', () => {
    if(num2 !== "" && op !== "") {
        operate();
    }
});