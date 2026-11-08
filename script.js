const Cooldown = document.querySelector('.cooldown')
const KillBtn = document.querySelector('.btn')
const RedPlayer = document.querySelector('.red-player')
Cooldown.style.margiTop = '20px'
let size = 40
let CooldownInJs = 10
KillBtn.addEventListener('click', function () { 
const CoolDownInterval  = setInterval(() => {
    if (CooldownInJs >= 0){
        RedPlayer.setAttribute('src','./red-dead.png')
        Cooldown.textContent = CooldownInJs
        CooldownInJs--
        size= size + 30
        Cooldown.style.margiTop = `${size}px`
        KillBtn.style.opacity='0.5'
    }
        else if (CooldownInJs== 0){
            RedPlayer.setAttribute('src','./red-walk.gif')
            clearInterval(CoolDownInterval)
            Cooldown.textContent = ''
            
        }
        else{
            RedPlayer.setAttribute('src','./red-walk.gif')
            Cooldown.textContent = ''
            KillBtn.style.opacity='1'
        }
    
    console.log(CooldownInJs)
},1000) ;
})
