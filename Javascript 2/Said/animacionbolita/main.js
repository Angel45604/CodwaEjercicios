const menu1 = document.querySelector(".menu1")
const menu2 = document.querySelector(".menu2")
const menu3 = document.querySelector(".menu3")
const menu4 = document.querySelector(".menu4")
const menu5 = document.querySelector(".menu5")
let toggle = true
let dir='normal'

// Event listener para detectar cuando se hace click al menú principal.
menu1.addEventListener('click', e => {
    dir = toggle ? 'normal' : 'reverse'
    // Animacion menu1
    const animation1 = menu1.animate(
        [{transform:'rotate(0deg)'},
         {transform:'rotate(90deg)'}],
        {
            easing:'ease-in-out',
            direction: dir,
            duration: 125,
            fill: 'forwards'
        }
    )
    // Animacion menu2
    const animation2 = menu2.animate(
        [{transform:'translateX(0)'},
         {transform:'translateX(calc(7vh + 2px))'}],
        {
            easing:'ease-in-out',
            direction: dir,
            delay: 125,
            duration: 250,
            fill: 'forwards'
        })
    // Animacion menu3
    const animation3 = menu3.animate(
        [{transform:'translateX(0)'},
         {transform:'translateX(calc(2*(7vh + 2px)))'}],
        {
            easing:'ease-in-out',
            direction: dir,
            delay: 125,
            duration: 250,
            fill: 'forwards'
        })
    // Animacion menu4
    const animation4 = menu4.animate(
        [{transform:'translateX(0)'},
         {transform:'translateX(calc(3*(7vh + 2px)))'}],
        {
            easing:'ease-in-out',
            direction: dir,
            delay: 125,
            duration: 250,
            fill: 'forwards'
        })
    // Animacion menu5
    const animation5 = menu5.animate(
        [{transform:'translateX(0)'},
         {transform:'translateX(calc(4*(7vh + 2px)))'}],
        {
            easing:'ease-in-out',
            direction: dir,
            delay: 125,
            duration: 250,
            fill: 'forwards'
        })
    
    toggle = !toggle
})