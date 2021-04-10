let botones = document.querySelectorAll('.botonazo')
let ganador = document.querySelector('#ganador')
let turno = false
for(let boton of botones) {
    boton.addEventListener('click', () => {
        let simbolo = turno ? 'X' : 'O'
        let color = turno ? 'lightcoral' : 'lightblue'
        boton.innerHTML = simbolo
        boton.style.backgroundColor = color
        turno = !turno
        if(checkWin(simbolo)) {
            for(let boton of botones) {
                boton.disabled = true
            }
        }
    })
}



function checkWin(simboloGanador) {
    let p = botones[0].innerHTML == botones[1].innerHTML && botones[0].innerHTML == botones[2].innerHTML && botones[0].innerHTML != ''
    let q = botones[3].innerHTML == botones[4].innerHTML && botones[3].innerHTML == botones[5].innerHTML && botones[3].innerHTML != ''
    let r = botones[6].innerHTML == botones[7].innerHTML && botones[6].innerHTML == botones[8].innerHTML && botones[6].innerHTML != ''

    let s = botones[0].innerHTML == botones[3].innerHTML && botones[0].innerHTML == botones[6].innerHTML && botones[0].innerHTML != ''
    let t = botones[1].innerHTML == botones[4].innerHTML && botones[1].innerHTML == botones[7].innerHTML && botones[1].innerHTML != ''
    let u = botones[2].innerHTML == botones[5].innerHTML && botones[2].innerHTML == botones[8].innerHTML && botones[5].innerHTML != ''

    let v = botones[0].innerHTML == botones[4].innerHTML && botones[0].innerHTML == botones[8].innerHTML && botones[4].innerHTML != ''
    let w = botones[2].innerHTML == botones[4].innerHTML && botones[2].innerHTML == botones[6].innerHTML && botones[4].innerHTML != ''

    if(p || q || r || s || t || u || v || w) {
        ganador.innerHTML = 'Ganó ' + simboloGanador
        return true
    }
    return false
}