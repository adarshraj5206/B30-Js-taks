var allStatus = document.querySelector('#status-container');
var full = document.querySelector('#full');
var growth = document.querySelector('#growth');

var arr =[
    {
        username: 'adarshVardhan',
        dp: 'https://images.unsplash.com/photo-1695556406049-8ca4f2ff854c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        status: 'https://i.pinimg.com/736x/e3/aa/9c/e3aa9ce17ab53f854ec61042b2a3dc1f.jpg'
    },
    {
        username: 'sakshi',
        dp: 'https://images.unsplash.com/photo-1634012711815-144e6102812e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        status: 'https://images.unsplash.com/photo-1599058919120-9ed1015f0fdf?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        username: 'akansha',
        dp: 'https://images.unsplash.com/photo-1616536864507-2083fd76a46d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        status: 'https://i.pinimg.com/736x/4f/b2/8a/4fb28a9d93b92c27bf0cb5b0143dc98d.jpg'
    },
    {
        username: 'kasish',
        dp: 'https://images.unsplash.com/photo-1617059070087-d05ea39977dd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        status: 'https://i.pinimg.com/736x/7b/9b/40/7b9b409bd769cf0d474abe15cecf954b.jpg'
    },
    {
        username: 'prateek',
        dp: 'https://images.unsplash.com/photo-1705297603092-3ee3cf0d22ed?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        status: 'https://i.pinimg.com/736x/8e/2e/87/8e2e8794cef1e6d07ebf1c4633c5daf4.jpg'
    },
    {
        username: 'anushka',
        dp: 'https://images.unsplash.com/photo-1618375601660-3e6842f5b791?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        status: 'https://i.pinimg.com/736x/be/4f/ad/be4fadccc79704ac72684ea5125f8735.jpg'
    }
]

var sum = "";

arr.forEach((elem,idx) => {
    // console.log(elem.username);
    sum +=`<div id=${idx} class="status">
                <img  src="${elem.dp}" alt="">
                <div class="text">
                    <h4>${elem.username}</h4>
                    <p>2 mins ago</p>
                </div>
            </div>`
})

allStatus.innerHTML = sum;

allStatus.addEventListener('click', (dets) => {
    var grow = 0;
    var goldenVal = arr[dets.target.id];

    var interval = setInterval(function(){
        grow++;
        growth.style.width = grow+'%'
    },20)

    full.style.display = 'block';
    full.style.backgroundImage = `url(${goldenVal.status})`;

    setTimeout(() => {
        full.style.display = 'none';
        clearInterval(interval);
    }, 2000);
})