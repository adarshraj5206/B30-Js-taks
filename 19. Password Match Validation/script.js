const passwordForm = document.querySelector('#passwordForm');

passwordForm.addEventListener('submit', function(event) {
    
    var password = document.querySelector('#password').value;
    var confirmPassword = document.querySelector('#confirmPassword').value;
    var errorDisplay = document.querySelector('#error');

    if (password !== confirmPassword) {
        event.preventDefault(); 
        errorDisplay.style.display = 'block'; 
    } else {
        errorDisplay.style.display = 'none';
        alert('your password matched')
        
        password.textContent = '';
        confirmPassword.textContent = '';
    } 
});