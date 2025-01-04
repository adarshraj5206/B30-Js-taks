const btn=document.querySelector('#btn');
const bulb=document.querySelector('#bulb');

let flag=1;
btn.addEventListener('click',()=>{
    if(flag==1){
        bulb.style.backgroundColor='#FFD700';
        // after.style.backgroundColor='#FFD700';
        flag=0;
        btn.innerHTML="Turn off"
    }
    else{
        bulb.style.backgroundColor='#ddd'
        btn.innerHTML="Turn on"
        flag=1;
    }
})