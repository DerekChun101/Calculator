function add (x ,y) {
    //console.log(x + y);
    return x + y;
    
}

function subtract(x, y) {
   // console.log(x - y);
    return x - y;
}

function multiply(x ,y) {
//console.log(x * y);
    return x * y;
}

function divide(x, y) {
    //console.log(x / y);
    return x/y;
    
}


function operate (currentNum, nextNum, operator) { //Call math functions
    switch (operator) {
        case 'add':
            return add(currentNum, nextNum);
        case 'subtract':
            return subtract(currentNum, nextNum);
        case 'multiply':
            return multiply(currentNum, nextNum);
         
        case 'divide':
            return divide(currentNum, nextNum);
    }
}

function next () { //Switches to next num
    isFirstNum = false;
    isSecondNum = true;
    digits.forEach(button => {
        button.onclick = () => {
            nextNum += button.textContent;
            if(nextNum.length > 21) {
                nextNum = nextNum.slice(0, -1);
            }
            display.textContent = nextNum;
            console.log(nextNum);                                                   
        
        }
    });                                                                            
    
}
function backToDefault () { //Resets default button functionaily
    digits.forEach(button => {
        button.onclick = () => { 
            if(isFirstNum === true && isSecondNum === false && afterEquals === true) { 
                currentNum = ''; //resets currentNum to blank, after a digit is pressed right after the equals sign is pressed
                afterEquals = false;
            }
            currentNum += button.textContent;
            if(currentNum.length > 21) {
                currentNum = currentNum.slice(0, -1);
            }
            console.log(currentNum);
            display.textContent = currentNum;
        }
    });
}
function resetNums() { //Resets all values back to default
    currentNum = '';
    nextNum = '';
    operator = '';
    isFirstNum = true;
    isSecondNum = false;
    afterEquals = false;
}
// function updateDisplay(text) {
//     currentNum += this.textContent;
//     console.log(currentNum);
//     display.textContent = currentNum;
//     isFirstNum= false;
// }

//DEFAULT VALUES
let currentNum = '';
let nextNum = '';
let operator = '';
let currentValue = '';
let isFirstNum = true;
let isSecondNum = false;
let afterEquals = false;


//BUTTONS
const digits = document.querySelectorAll('.digitsButton');
const display = document.querySelector('.display');

digits.forEach(button => {
    button.onclick = () => {
        currentNum += button.textContent;
        if(currentNum.length > 21) {
            currentNum = currentNum.slice(0, -1);
        }
        console.log(currentNum);
        display.textContent = currentNum;
    }
});          

const point = document.querySelector('.point');
point.addEventListener('click', () => {
    if(!display.textContent.includes('.') && isFirstNum) {
        currentNum += point.textContent;
        console.log(currentNum);
        display.textContent = currentNum;
    } else if(!display.textContent.includes('.') && isSecondNum) {
            nextNum += point.textContent;
            display.textContent = nextNum;
            console.log(nextNum);   
    }
});                                                                   

const operators = document.querySelectorAll('.operatorsButtons'); 
operators.forEach(button => {
    button.addEventListener('click', () => {
        if(isFirstNum === true && isSecondNum === false) {
            operator = button.id;
            console.log(operator);
            next();
        } else if(isFirstNum === false && isSecondNum === true) {
            currentValue = operate(+currentNum, +nextNum, operator);
            if(currentValue === Infinity) {
                display.textContent = 'Kaboom';
                resetNums();
                backToDefault();
            } else {
                display.textContent = +currentValue.toFixed('7');
                console.log(currentValue);
                operator = button.id;
                currentNum = currentValue;
                nextNum = '';
            }
        } 
    })
});

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    if(currentNum === '' || nextNum === '') { //Resets to default if equals is pressed is any number is empty
        resetNums();
        display.textContent = '';
    } else {
        currentValue = parseFloat(operate(+currentNum, +nextNum, operator));
        if(currentValue === Infinity) {
            display.textContent = 'Kaboom';
            resetNums();
            backToDefault();
        } else {
            display.textContent = +currentValue.toFixed('7');
            console.log(currentValue);
            currentNum = currentValue;
            nextNum = ''; //resets to default expect of currentValue
            isFirstNum = true;
            isSecondNum = false;
            afterEquals = true;
            backToDefault();
        }
    }
});
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    display.textContent = '';
    resetNums();
    backToDefault();
});

