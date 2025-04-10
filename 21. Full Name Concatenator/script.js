const submitBtn = document.querySelector('button');
const Name =  document.querySelector('#fullNameDisplay');

submitBtn.addEventListener('click', event =>{
   

    event.preventDefault();

    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;


    const fullName = `${firstName} ${lastName}`;


    Name.textContent = `Full Name: ${fullName}`;
    
    // Clear input fields
    document.querySelector('#firstName').value = '';
    document.querySelector('#lastName').value = '';
})