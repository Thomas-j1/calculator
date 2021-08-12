
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operation');
const display = document.querySelector('#display');

//operator buttons
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');


let displayValue = "";
let firstValue;
let secondValue;
let solution;
let operation;

let operationClicked = false;

//add
function add(x, y) {
    return x + y;
};

//subtract
function subtract(x, y) {
    return x - y;
};

//multiply
function multiply(x, y) {
    return x * y;
};

//divide
function divide(x, y) {
    return (x / y);
};

function operate(operator, x, y) {
    console.log(operator, x, y);
    finalValue = operator(parseInt(x), parseInt(y));
    displayValue = finalValue;
    updateDisplay();
}

function numberBtnClick() {
    if (operationClicked) {
        clearDisplay();
    }
    let n = this.value;
    displayValue += n;
    updateDisplay();
    operationClicked = false;
}

function updateDisplay() {
    display.innerHTML = displayValue;
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function getDisplayValue() {
    return parseInt(display.innerHTML);
}

function operatorClicked(e) {
    operationClicked = true;
    if (firstValue != undefined) {
        calc();
        operation = this.value;
    } else {
        operation = this.value;
        firstValue = getDisplayValue();
        console.log(firstValue);
    }
}

function calc() {
    if (secondValue != undefined) {
        firstValue = finalValue;
    }
    secondValue = getDisplayValue();
    console.log(firstValue, secondValue);
    operate(window[operation], firstValue, secondValue);
    firstValue = finalValue;
}

//eventListeners

equalsButton.addEventListener('click', () => {
    calc();
    //secondValue = 0;
});

clearButton.addEventListener('click',() => {
    firstValue = null;
    secondValue = null;
    clearDisplay();
});

numberButtons.forEach(button =>
    button.addEventListener('click', numberBtnClick));

operatorButtons.forEach(button =>
    button.addEventListener('click', operatorClicked));