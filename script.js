function add (x ,y) {
    console.log(x + y);
    return x + y;
    
}

function subtract(x, y) {
    console.log(x - y);
    return x - y;
}

function multiply(x ,y) {
    console.log(x * y);
    return x * y;
}

function divide(x, y) {
    console.log(x / y);
    return x/y;
}


function operate (num1, num2, operator) {
    switch (operator) {
        case 'add':
            add(num1, num2);
            break;
        case 'subtract':
            subtract(num1, num2);
            break;
        case 'multiply':
            multiply(num1, num2);
            break;
        case 'divide':
            divide(num1, num2);
    }
}

function nextNum () {
    digits.forEach(button => {
        button.onclick = () => {
            num2 += button.textContent;
            display.textContent = num2;
            console.log('num1 :' + num1);
            console.log('num2 :' + num2);
        }
    });                                                                            
    
}
// function updateDisplay(text) {
//     num1 += this.textContent;
//     console.log(num1);
//     display.textContent = num1;
//     isFirstNum = false;
// }


let num1 = '';
let num2 = '';
const operator = 'add';
let isFirstNum = 'true';
const digits = document.querySelectorAll('.digitsButton');
const display = document.querySelector('.display');
digits.forEach(button => {
    button.onclick = () => {
        num1 += button.textContent;
        console.log(num1);
        display.textContent = num1;
        isFirstNum = false;
    }
});
const operators = document.querySelectorAll('.operatorsButtons'); 
operators.forEach(button => {
    button.addEventListener('click', () => {
        if(isFirstNum === false) {
            nextNum();
        }
    })
});