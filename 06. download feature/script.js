var btn=document.querySelector("button")
var growth = document.querySelector('#growth');
var h3=document.querySelector("h3")


btn.addEventListener("click",()=>{
    var grow = 0;

    var progressInterval= setInterval(function(){
      grow++;
      growth.style.width = grow+'%'
      
      if(grow < 100){
        btn.innerHTML = 'progress..'
      }
      else if(grow >= 100){
          grow = 100;
          clearInterval(progressInterval); 
          btn.innerHTML = 'Downloaded';
      }
       h3.innerHTML=grow+"%"
    },100)
  
  })