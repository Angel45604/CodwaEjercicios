let caja = document.querySelector('#caja')

caja.addEventListener('click', (event) => {
    for (let pelota of caja.children){
        if(pelota.style.animationPlayState != 'paused'){
            pelota.style.animationPlayState = 'paused'
        } else {
            pelota.style.animationPlayState = 'running'
        }
    }
})