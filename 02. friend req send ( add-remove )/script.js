const btn = document.querySelector("button");
const h5 = document.querySelector("h5");
const picture = document.querySelector("img");
const card = document.querySelector(".card");

let isFriend = 0;

btn.addEventListener("click", ()=> {
    if( isFriend === 0 ){
        h5.textContent = "Friend";
        h5.style.color = "green";
        btn.textContent = "Remove Friend";
        btn.style.backgroundColor = "red";
        picture.style.borderColor = "green";
        card.style.borderColor = "green";
        isFriend = 1;
    }
    else{
        h5.textContent = "Stranger";
        h5.style.color = "red";
        btn.textContent = "Add Friend";
        btn.style.backgroundColor = "green";
        picture.style.borderColor = "red";
        card.style.borderColor = "red";
        isFriend = 0;
    }
})

