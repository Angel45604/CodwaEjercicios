const c1 = document.querySelector('.c1')
const c2 = document.querySelector('.c2')
const c3 = document.querySelector('.c3')
const c4 = document.querySelector('.c4')
const c5 = document.querySelector('.c5')

const c1avanza = c1.animate([
    {
        transform: 'translateX(0px)',
        offset: 0
    },
    {   
        transform: 'translateX(6vw)',
        offset: 1
    }
],{
    easing: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
    duration: 250,
    direction: 'alternate',
    fill: 'forwards',
    iterations: 1
})
c1avanza.pause()

const c2avanza = c2.animate([
    {
        transform: 'translateX(0px)',
        offset: 0
    },
    {   
        transform: 'translateX(12vw)',
        offset: 1
    }
],{
    easing: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
    duration: 250,
    direction: 'alternate',
    fill: 'forwards',
    iterations: 1
})
c2avanza.pause()

const c3avanza = c3.animate([
    {
        transform: 'translateX(0px)',
        offset: 0
    },
    {   
        transform: 'translateX(18vw)',
        offset: 1
    }
],{
    easing: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
    duration: 250,
    direction: 'alternate',
    fill: 'forwards',
    iterations: 1
})
c3avanza.pause()

const c4avanza = c4.animate([
    {
        transform: 'translateX(0px)',
        offset: 0
    },
    {   
        transform: 'translateX(24vw)',
        offset: 1
    }
],{
    easing: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
    duration: 250,
    direction: 'alternate',
    fill: 'forwards',
    iterations: 1
})
c4avanza.pause()


c5.addEventListener('click', () => {
    if (c1avanza.playState == "finished"){
        c1avanza.reverse()
        c2avanza.reverse()
        c3avanza.reverse()
        c4avanza.reverse()
    }
    else{
        c1avanza.play()
        c2avanza.play()
        c3avanza.play()
        c4avanza.play()
    }
})
console.log(c1avanza)