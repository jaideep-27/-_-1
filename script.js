let display = document.getElementById('display');
let equation = '';  // To store the entire equation

function appendNumber(number) {
    equation += number; // Append the number to the equation
    updateDisplay();
}

function appendOperator(op) {
    if (equation === '' || /[+\-*/]$/.test(equation)) return; // Avoid adding operator after another operator
    equation += op;
    updateDisplay();
}

function appendDecimal() {
    let lastNumber = equation.split(/[+\-*/]/).pop(); // Get the last number before operator
    if (!lastNumber.includes('.')) {
        equation += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    equation = ''; // Clear the entire equation
    updateDisplay();
}

function deleteLast() {
    equation = equation.slice(0, -1); // Remove the last character
    updateDisplay();
}

function calculate() {
    try {
        equation = eval(equation).toString(); // Evaluate the equation safely
        updateDisplay();
    } catch (e) {
        equation = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    display.innerText = equation === '' ? '0' : equation;
}
