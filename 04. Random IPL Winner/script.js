var teams = [
    {
        teamName: 'RCB',
        teamPic : 'https://i.pinimg.com/736x/c7/0e/ba/c70eba7b77ed6e7eadb649af6d9411b3.jpg'
    },
    { 
        teamName: 'PBKS', 
       teamPic: 'https://i.pinimg.com/736x/37/20/cb/3720cb058208fde36c3f71ddb25d563b.jpg' 
    },
    { 
        teamName:'DC', 
        teamPic: 'https://i.pinimg.com/736x/df/00/01/df00017ea3bf5296c2e207aa094b7b9a.jpg' 
    },
    { 
        teamName: 'CSK', 
        teamPic: 'https://i.pinimg.com/736x/a3/56/63/a35663dcd52c232157e852ab578f0dc4.jpg' 
    },
    { 
        teamName: 'MI', 
        teamPic: 'https://i.pinimg.com/736x/4a/92/61/4a9261948cd6cb8745d9fee957fc8605.jpg' 
    },
    { 
        teamName: 'SRH', 
        teamPic: 'https://i.pinimg.com/736x/d9/be/dd/d9beddb73e1d8b8164c9f8aff239e839.jpg' 
    },
    { 
        teamName: 'KKR', 
        teamPic: 'https://i.pinimg.com/736x/6e/e1/7b/6ee17b4b8a8aea2d5830a8d41216f175.jpg' 
    },
    { 
        teamName: 'RR', 
        teamPic: 'https://i.pinimg.com/736x/d5/4c/c7/d54cc7e0a8bd9267bf3fa8bd21fe7e87.jpg' 
    }
]

var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var teamImg = document.querySelector('.winCard img')

btn.addEventListener('click', ()=>{
    var randomNum = Math.floor(Math.random()*teams.length) 
    var winningTeam = teams[randomNum].teamName
    var winningTeamPic = teams[randomNum].teamPic
    h2.innerHTML = `${winningTeam}`
    teamImg.src = `${winningTeamPic}`
})