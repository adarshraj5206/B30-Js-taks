var btn=document.querySelector(".btn")
var h4=document.querySelector('h4')

var flag = 0

btn.addEventListener('click',()=>{
    
    if(flag == 0){
        h4.innerHTML='Request Sending.....'
        h4.style.color='blue'
        setTimeout(function(){
        h4.innerHTML='Friends'
        h4.style.color='green'
        btn.innerHTML = 'Remove friend'
        btn.style.backgroundColor = 'red'
        btn.style.color='white'
        },3000)
        flag = 1;
    }
    else{
        h4.innerHTML='removing.....'
        h4.style.color='blue'
        setTimeout(function(){
        h4.innerHTML='stranger'
        h4.style.color='red'
        btn.innerHTML = 'Add friend'
        btn.style.backgroundColor = 'seagreen'
        btn.style.color='white'
        },3000)
        flag = 0;
    }


})