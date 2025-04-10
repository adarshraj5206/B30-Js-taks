
 const form = document.querySelector('#emailForm');
 const emailError = document.querySelector('#emailError');

 form.addEventListener('submit', function (event) {

   const email = document.getElementById('email').value.trim();

   // Regular expression for basic email validation
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (!emailRegex.test(email)) {
     event.preventDefault();
     emailError.textContent = "Please enter a valid email address.";
   } 
   else {
     emailError.textContent = "";
     alert(`Form submitted successfully with Email: ${email}`);
   }
 });


//  emailRegex.test(email) checks if an email address is valid.

// emailRegex: Think of this as a set of rules for what a valid email looks like (like having an "@" symbol and a domain name).

// .test(email): This part uses those rules to check the actual email you provide

// If the email fits the rules, it returns true (valid); if not, it returns false (invalid). So, it's a way to check if an email address is correct!