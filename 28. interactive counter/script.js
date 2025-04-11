// Select elements
const counterDisplay = document.querySelector('#counter-display');
const incrementButton = document.querySelector('#increment');
const decrementButton = document.querySelector('#decrement');

// Initialize count
let count = 0;

// Update the display
function updateDisplay() {
  counterDisplay.textContent = count;
}

// Event listeners
incrementButton.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decrementButton.addEventListener('click', () => {
  count--;
  updateDisplay();
});
