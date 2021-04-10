const txtSaludo = document.querySelector('#saludo')
const txtPregunta = document.querySelector('#pregunta')
const txtFake = document.querySelector('#fake')

const btnInvocar = document.querySelector('#invocar')
const h1Respuesta = document.querySelector('#respuesta')


// txtSaludo.addEventListener('keydown', e => {
//     console.log('down',e.keyCode)
// })

// txtSaludo.addEventListener('keypress', e => {
//     console.log('pressed', e.keyCode)
// })

// txtSaludo.addEventListener('keyup', e => {
//     console.log('up',e.keyCode)
// })

let saludo = 'Saludos señor de las tinieblas'

let toggle = false
txtSaludo.addEventListener('keypress', e => {
    if(e.keyCode == 96) {
        toggle = !toggle
        e.preventDefault()
    }

    if (toggle) {
        txtFake.value += e.key == '`' ? '' : e.key
        txtSaludo.value += saludo[txtSaludo.value.length]
        e.preventDefault()
    }
})


btnInvocar.addEventListener('click', e => {
    let respuesta = txtFake.value
    h1Respuesta.innerHTML = respuesta || 'Tú no crees en mi'
})