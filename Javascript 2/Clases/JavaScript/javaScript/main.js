const btnInput = document.querySelector('#botoncito')
const btnEstilos = document.querySelector('#btnEstilos')
const btnPlaceHolder = document.querySelector('#btnPlaceHolder')
const btnEsconder = document.querySelector('#btnEsconder')
const btnToggle = document.querySelector('#btnToggle')

const cuadroTexto = document.querySelector('#saludo')

const input = document.querySelector('#texto')

btnInput.addEventListener('click', () => {
    leerInput()
    input.value = ''
})

function leerInput() {
    let texto = input.value
    cuadroTexto.innerText = texto
}

btnEstilos.addEventListener('click', () => {
    cambiarEstilos()

})

function cambiarEstilos() {
    cuadroTexto.style.color = 'blue'
}

btnPlaceHolder.addEventListener('click', () => {
    cambiarPlaceHolder()
})

function cambiarPlaceHolder() {
    input.placeholder = 'Nuevo Placeholder'
}

btnEsconder.addEventListener('click', () => {
    esconderh1()
})

function esconderh1() {
    cuadroTexto.style.display = 'none'
}

btnToggle.addEventListener('click', () => {
    toggleClass()
})

function toggleClass() {
    cuadroTexto.classList.toggle('escondido')
}