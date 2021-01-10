let img = ['https://ponceelrelajado.com/juego/img/piedra.png','https://reiinakano.com/tfjs-rock-paper-scissors/images/paper.png', 'https://www.netclipart.com/pp/m/414-4145359_paper-icon-clipart-png-download-rock-paper-scissors.png']
let piedra = document.querySelector('#btnpiedra')
let papel = document.querySelector('#btnpapel')
let tijeras = document.querySelector('#btntijeras')

piedra.addEventListener('click', () => {
    let i = Math.floor(Math.random() * img.length)
    elco.src = img[i]
    elct.src = 'https://ponceelrelajado.com/juego/img/piedra.png'
    if (elco.src == img[1]){
        alert ('¡Perdiste!\nTú: Piedra\nOponente: Papel')
    }
    else if (elco.src == img[2]){
        alert ('¡Ganaste!\nTú: Piedra\nOponente: Tijeras')
    }
    else{
        alert ('Es un empate~\nTú: Piedra\nOponente: Piedra')
    }
})
papel.addEventListener('click', () => {
    let i = Math.floor(Math.random() * img.length)
    elco.src = img[i]
    elct.src = 'https://reiinakano.com/tfjs-rock-paper-scissors/images/paper.png'
    if (elco.src == img[2]){
        alert ('¡Perdiste!\nTú: Papel\nOponente: Tijeras')
    }
    else if (elco.src == img[0]){
        alert ('¡Ganaste!\nTú: Papel\nOponente: Piedra')
    }
    else{
        alert ('Es un empate~\nTú: Papel\nOponente: Papel')
    }
})
tijeras.addEventListener ('click', () =>{
    let i = Math.floor(Math.random() * img.length)
    elco.src = img[i]
    elct.src = 'https://www.netclipart.com/pp/m/414-4145359_paper-icon-clipart-png-download-rock-paper-scissors.png'
    if (elco.src == img[0]){
        alert ('¡Perdiste!\nTú: Tijeras\nOponente: Piedra')
    }
    else if (elco.src == img[1]){
        alert ('¡Ganaste!\nTú: Tijeras\nOponente: Papel')
    }
    else{
        alert ('Es un empate~\nTú: Tijeras\nOponente: Tijeras')
    }
})
