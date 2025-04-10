const submitBtn = document.querySelector('button')
const passwordForm = document.querySelector('#passwordForm');
///
///

passwordForm.addEventListener('submit', function(event) {
    
    const password = document.querySelector('#password').value; //////
    const errorDisplay = document.querySelector('#error'); /////

    if (password.length < 6) {
        event.preventDefault(); 
        errorDisplay.style.display = 'block'; 
    } else {
        errorDisplay.style.display = 'none';
        alert(`your password's length is good` );   
    }
});