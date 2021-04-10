let pelota = document.querySelector('.bola')
let pelota2 = document.querySelector('.bola2')
let cont = document.querySelector('.camino')

cont.addEventListener('click', () => {
    console.log(pelota.style.animationPlayState, pelota2.style.animationPlayState)
    if (pelota.style.animationPlayState == 'paused')
        pelota.style.animationPlayState = 'running'

    else
        pelota.style.animationPlayState = 'paused'    
    
    if (pelota2.style.animationPlayState == 'paused')
        pelota2.style.animationPlayState = 'running'

    else
        pelota2.style.animationPlayState = 'paused'  
    
})