function operate(num1, num2, cb) {
    return cb(num1, num2);
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

console.log(operate(10, 5, add)); // Output: 15
console.log(operate(10, 5, subtract)); // Output: 5
console.log(operate(10, 5, multiply)); // Output: 50
console.log(operate(10, 5, divide)); // Output: 2   