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

let num1 = '';
let num2 = '';
const operator = 'add';

const digits = document.querySelectorAll('.digitsButton');
const display = document.querySelector('.display');
digits.forEach(button => {
    button.addEventListener('click', () => {
        num1 += button.textContent;
        console.log(num1);
        display.textContent = num1;
    })
});
console.log(digits); 