var btn=document.querySelector("button")
var arr=[
   "https://cdn-icons-png.freepik.com/256/15224/15224858.png?ga=GA1.1.967894062.1734974367&semt=ais_hybrid",
   "https://cdn-icons-png.freepik.com/512/6031/6031569.png?ga=GA1.1.967894062.1734974367",
   "https://cdn-icons-png.freepik.com/256/974/974757.png?ga=GA1.1.967894062.1734974367&semt=ais_hybrid",
   "https://cdn-icons-png.freepik.com/512/5282/5282297.png?ga=GA1.1.967894062.1734974367",
   "https://cdn-icons-png.freepik.com/512/1236/1236459.png?ga=GA1.1.967894062.1734974367",
   "https://cdn-icons-png.freepik.com/256/4925/4925737.png?ga=GA1.1.967894062.1734974367&semt=ais_hybrid",
   "https://cdn-icons-png.freepik.com/512/4925/4925693.png?ga=GA1.1.967894062.1734974367"
]
   
btn.addEventListener('click',function(){
    var valueX=Math.random()*100;
    var valueY=Math.random()*100;
    var rotate=Math.random()*360;
    var num=Math.floor(Math.random()*arr.length)

    var img=document.createElement("img")
    img.setAttribute("src",arr[num]);
    document.body.appendChild(img)
    img.style.height="80px"
    img.style.position='absolute'
    img.style.left=valueX+'%'
    img.style.top=valueY+'%'
    img.style.rotate=rotate+'deg'
    
})