let display = document.querySelector("#display");
let currentExpression = "";

// Updates the display with the current expression
function updateDisplay(value) {
      display.value = value;
}

// Appends a value (number or operator) to the expression
function appendValue(value) {
    currentExpression += value;
    updateDisplay(currentExpression);
}

// Clears the display and resets the expression
function clearDisplay() {
    currentExpression = "";
    updateDisplay(currentExpression);
}

//remove last character
function del(){
    currentExpression = currentExpression.slice(0,-1); 
    updateDisplay(currentExpression);  
}

// Evaluates the expression and displays the result
function calculateResult() {
    try {
        // Evaluate the expression safely
        const result = eval(currentExpression);
        updateDisplay(result);
        currentExpression = result.toString(); // Save the result for further calculations
    } catch (error) {
        updateDisplay("Error");
        currentExpression = "";
    }
}
