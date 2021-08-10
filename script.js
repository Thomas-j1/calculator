
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
    return parseInt(x) + parseInt(y);
};

//subtract
function subtract(x, y) {
    return parseInt(x) - parseInt(y);
};

//multiply
function multiply(x, y) {
    return x * y;
};

//divide
function divide(x, y) {
    return (parseInt(x) / parseInt(y));
};

function operate(operator, x, y) {
    console.log(operator, x, y);
    if (operator == "add") {
        finalValue = add(x, y);
    }
    else if (operator == "subtract") {
        finalValue = subtract(x, y);
    }
    else if (operator == "multiply"){
        finalValue = multiply(x, y);
    }
    else if (operator == "divide"){
        finalValue = divide(x, y);
    }
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
    console.log(display.innerHTML);
    return display.innerHTML;
}

function operatorClicked(e) {
    operation = this.value;
    operationClicked = true;
    firstValue = getDisplayValue();
}

//eventListeners

equalsButton.addEventListener('click', () => {
    secondValue = getDisplayValue();
    console.log(firstValue, secondValue);
    operate(operation, firstValue, secondValue);
});

clearButton.addEventListener('click', clearDisplay);

numberButtons.forEach(button =>
    button.addEventListener('click', numberBtnClick));

operatorButtons.forEach(button =>
    button.addEventListener('click', operatorClicked));