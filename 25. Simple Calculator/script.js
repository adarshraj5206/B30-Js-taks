let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let result = document.querySelector('#result');
let addBtn = document.querySelector('#add');
let subBtn = document.querySelector('#sub');

addBtn.addEventListener('click',()=>{
    const add = parseFloat(num1.value) + parseFloat(num2.value);
    result.textContent = `Result: ${add}`;
})
   
subBtn.addEventListener('click',()=>{
    const sub = parseFloat(num1.value) - parseFloat(num2.value);
    result.textContent = `Result: ${sub}`;
})
   
