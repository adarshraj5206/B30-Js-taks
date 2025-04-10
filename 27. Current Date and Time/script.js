let dateTime = document.querySelector('#date-time')

// Function to update the current date and time
function updateDateTime() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString(); // Formats date and time based on locale
    dateTime.textContent = formattedDateTime;
  }

  // Call the function to display the date and time
  updateDateTime();

  // Optionally, update the time every second
  setInterval(updateDateTime, 1000);


// const date =  new Date();

// document.write(`${String(date.getDate()).padStart(2,0)}` );
