var main = document.querySelector('#main')
var redBtn = document.querySelector('#red')
var greenBtn = document.querySelector('#green')
var yellowBtn = document.querySelector('#yellow')
var blueBtn = document.querySelector('#blue')
var orangeBtn = document.querySelector('#orange')



redBtn.addEventListener('click', ()=>{
    main.style.backgroundColor = 'red';
})

greenBtn.addEventListener('click', ()=>{
    main.style.backgroundColor = 'green';
})

yellowBtn.addEventListener('click', ()=>{
    main.style.backgroundColor = 'yellow';
})

blueBtn.addEventListener('click', ()=>{
    main.style.backgroundColor = 'blue';
})

orangeBtn.addEventListener('click', ()=>{
    main.style.backgroundColor = 'orange';
})