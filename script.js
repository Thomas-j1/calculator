
const numberButtons = document.querySelectorAll('.number');
const display = document.querySelector('#display');

//operator buttons
const addButton = document.querySelector('#add');
const clearButton = document.querySelector('#clear');


let displayValue = "";
let firstValue;
let secondValue;

//add

//subtract

//multiply

//divide

function operate(operator, x, y){

}

function numberBtnClick(){
    let n = this.value;
    displayValue+=n;
    updateDisplay();
}

function updateDisplay(){
    display.innerHTML=displayValue;
}

//eventListeners

clearButton.addEventListener('click', () => {
    displayValue="";
    updateDisplay();
})

numberButtons.forEach(button => 
    button.addEventListener('click', numberBtnClick));

