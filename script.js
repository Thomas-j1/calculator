
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
let lastButtonEquals = false;

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
    if (y == 0) {
        displayError();
        return;
    }
    return (x / y);
};

function operate(operator, x, y) {
    console.log(operator, x, y);
    finalValue = operator(parseInt(x), parseInt(y));
    if (isNaN(finalValue)) {
        displayError();
        return;
    }
    displayValue = Math.round(finalValue * 100) / 100;
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
    lastButtonEquals = false;
}

function updateDisplay() {
    display.innerHTML = displayValue;
}

function displayError() {
    console.log("ERROR");
    display.innerHTML = "ERROR";
}

function clearDisplay() {
    displayValue = "";
    display.innerHTML = "0";
}

function getDisplayValue() {
    return parseInt(display.innerHTML);
}

function operatorClicked(e) {
    if (operation == this.value && operationClicked) {
        return;
    }
    operationClicked = true;
    if (lastButtonEquals) {
        operation = this.value;
        addBorderToButton(this);
        return;
    }
    if (firstValue != undefined) {
        calc();
    } else {
        firstValue = getDisplayValue();
    }
    operation = this.value;
    addBorderToButton(this);
    lastButtonEquals = false;
}

function calc() {
    if (operation == undefined) {
        finalValue = 0;
        return;
    }
    if (secondValue != undefined) {
        firstValue = finalValue;
    }
    secondValue = getDisplayValue();
    console.log(firstValue, secondValue);
    operate(window[operation], firstValue, secondValue);
    firstValue = finalValue;
    secondValue = 0;
}

function removeOtherSelectors(currentOperator) {
    operatorButtons.forEach(button => {
        if (button == currentOperator) {
            return;
        } else {
            button.style.border = "";
        }
    });
}

function addBorderToButton(button){
    button.style.border = "1px solid white";
    removeOtherSelectors(button);
}
//eventListeners

equalsButton.addEventListener('click', () => {
    calc();
    lastButtonEquals = true;
    removeOtherSelectors();
    //secondValue = 0;
});

clearButton.addEventListener('click', () => {
    firstValue = null;
    secondValue = null;
    operation = null;
    clearDisplay();
    removeOtherSelectors();
});

numberButtons.forEach(button =>
    button.addEventListener('click', numberBtnClick));

operatorButtons.forEach(button =>
    button.addEventListener('click', operatorClicked));