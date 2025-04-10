let colorDisplay = document.querySelector("#colordisplay");
let colorGenBtn = document.querySelector("#colorgenbtn");
let saveColorBtn = document.querySelector("#saveColorbtn");
let savedColorsContainer = document.querySelector(".saveCollection");

let randomColor = null;
let savedColors = [];
const maxColors = 18;

colorGenBtn.addEventListener("click", () => {
  randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
  colorDisplay.style.backgroundColor = randomColor;
});

saveColorBtn.addEventListener("click", () => {
  if (randomColor === null) {
    alert("Please generate a color ");
    return;
  }
  
  if (savedColors.includes(randomColor)) {
    alert("This is already saved!");
    return;
  }

  if (savedColors.length >= maxColors) {
    savedColors.shift();
    savedColorsContainer.removeChild(savedColorsContainer.firstElementChild);
  }

  savedColors.push(randomColor);

  const newdiv = document.createElement("div");
  newdiv.classList.add("savedcolor");
  newdiv.style.backgroundColor = randomColor;
  //   console.log(newdiv);
  savedColorsContainer.appendChild(newdiv);
});
