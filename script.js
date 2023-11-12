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

const num1 = 1;
const num2 = 2;
const operator = 'add';