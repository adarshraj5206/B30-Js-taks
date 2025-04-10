
const form = document.querySelector('#userForm');
const nameError = document.querySelector('#nameError');


form.addEventListener('submit', function (event) {
 
  const name = document.querySelector('#name').value.trim();

  
  if (name === "") {
    event.preventDefault();
    nameError.textContent = "Name cannot be empty.";
  } 
  else {
    
    nameError.textContent = "";
    alert(`Form submitted successfully with Name: ${name}`);
  }
});