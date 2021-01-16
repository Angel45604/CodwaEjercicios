let cont = document.querySelector('.contenedor')
let roja = document.querySelector('.roja')
let azul = document.querySelector('.azul')

cont.addEventListener('click', e =>{
    if(roja.style.animationPlayState != 'paused' && azul.style.animationPlayState != 'paused'){
        roja.style.animationPlayState = 'paused'
        azul.style.animationPlayState = 'paused'

    }
    else{
        roja.style.animationPlayState = 'running'
        azul.style.animationPlayState = 'running'
    }
})