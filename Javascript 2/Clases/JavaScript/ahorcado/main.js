let palabras = ['lavadora',
'secadora',
'sofa',
'gobierno',
'diputado',
'democracia',
'computadora',
'teclado']

let imgs = ['1.png','2.png','3.png','4.png','5.png','6.png']

let imgMonito = document.querySelector('#monito')
let boton = document.querySelector('#btnOk')
let txtLetra = document.querySelector('#txtletra')
let h1Palabra = document.querySelector('#palabra')

let palabra = ''
let guiones = ''
let intentos = 0

function adivinarLetra(letra, palabraGuiones, palabra) {
    if (palabraGuiones.includes(letra))
        return ''

    palabraGuiones = palabraGuiones.split('')
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] == letra) 
            palabraGuiones[i] = letra
    }

    return palabraGuiones.join('')
}

function guionizar(palabra) {
    let palabraSeparada = palabra.split('')
    let guiones = ''
    palabraSeparada.forEach(e=> {
        guiones+='-'
    })
    return guiones
}

function dibujarPalabra(guiones, intentos) {
    h1Palabra.innerHTML = guiones
    if(intentos >= imgs.length-1) 
        yaGano()
    
    imgMonito.src = 'img/'+imgs[intentos]
}

function yaGano(gano) {
    if (gano) 
        alert('GANASTE!')
    else 
        alert('PERDISTE!')
    
    h1Palabra.innerHTML = palabra
    txtLetra.style.display = 'none'
    boton.style.display = 'none'
}

function turno(letra) {
    if (palabra.includes(letra)) {
        let tmp =adivinarLetra(letra, guiones, palabra)
        if (tmp)
            guiones = tmp
        else
            intentos++
    } else 
        intentos++
    if(!guiones.includes('-')) 
        yaGano()
    
        
}

window.addEventListener('load', () => {
    alert('hola, bienvenido al ahorcado')
    let i = Math.floor(Math.random() * palabras.length)
    palabra = palabras[i]
    guiones = guionizar(palabra)
    dibujarPalabra(guiones, intentos)
})

boton.addEventListener('click', () => {
    let letra = txtLetra.value
    txtLetra.value = ''
    if (letra)
        turno(letra)
    else
        alert('Por favor ingresa una letra')
    dibujarPalabra(guiones, intentos)
})
