const pelota = document.querySelector('.circle')
const pausa = document.querySelector('.pause')
const reversa = document.querySelector('.reverse')
const stop = document.querySelector('.stop')
const lento = document.querySelector('.low')
const rapido = document.querySelector('.quick')

const avanza = pelota.animate([
{
    left: '0',
    offset: 0
},
{
    transform: 'translateX(47rem)',
    offset: 1
}
],{
    easing: 'linear',
    duration: 2000,
    direction: 'alternate',
    fill: 'forwards',
    iterations: Infinity
})

pausa.addEventListener('click', () => {

    if (avanza.playState == "running")
        avanza.pause()
    else
        avanza.play()

})

reversa.addEventListener('click', () => {

    avanza.reverse()

})

stop.addEventListener('click', () => {

    avanza.cancel()

})

lento.addEventListener('click', () => {

    if (avanza.playbackRate > 0.1)
        avanza.playbackRate -= 0.1

})

rapido.addEventListener('click', () => {

    avanza.playbackRate += 0.1

})
console.log(avanza)