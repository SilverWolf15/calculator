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
        console.log("Error");
        clear();
        return;
    }
    num1 = n1/n2;
    num2 = "";
}

function operate() {
    n1 = parseInt(num1);
    n2 = parseInt(num2);
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
    console.log(num1, num2, op);
}

function clear() {
    num1 = "";
    num2 = "";
    op = "";
    opFlag = false;
    decimalFlag = false;
}

inputs = document.querySelectorAll(".inputs button");
operator = document.querySelectorAll(".operators button");
ac = document.querySelector(".clear");
evaluate = document.querySelector(".equal");

inputs.forEach(element => {
    element.addEventListener('click', () => {
        if(opFlag === false) {
            num1 += element.textContent;
        } else {
            num2 += element.textContent;
        }
        console.log(num1, num2, op);
    });
});

operator.forEach( element => {
    element.addEventListener('click', () => {
        op = element.textContent;
        opFlag = true;
        if(num2 !== "") {
            operate();
            return;
        }
    })
});

ac.addEventListener('click', clear);

evaluate.addEventListener('click', () => {
    if(num2 !== "") {
        operate();
    }
});