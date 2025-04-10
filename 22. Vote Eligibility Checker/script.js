const form = document.querySelector('form');
const btn = document.querySelector('button');
const messageElement = document.querySelector('#message');



form.addEventListener('submit', event => {
   
    event.preventDefault();

    // Clear previous message
    messageElement.textContent = '';

    // Retrieve the age value inside the event listener
    const age = parseInt(document.querySelector('#ageInput').value);

    if (age >= 18) {
      
        messageElement.textContent = "You are eligible to vote!";
    } else {
        messageElement.textContent = "You are not eligible to vote.";
    }

    // Clear the input field for the next entry
    age = '';

})

