const pelota = document.querySelector('.pelota')

const rebota = pelota.animate([
    {
        left: '0',
        offset: 0
    },
    {
        left: 'calc(100% - 100px)',
        offset: 1
    }
],{
    easing: 'linear',
    duration: 2000,
    direction: 'alternate',
    // iterations: Infinity
    fill: 'forwards'
})

const rebote = pelota.animate([
    {
        transform: 'translateY(0) scale(1, 0.8)',
        offset: 0
    },
    {
        transform: 'translateY(25px) scale(1, 1)',
        offset: 0.5
    },
    {

        transform: 'translateY(50px) scale(1, 0.8)',
        offset: 1
    }
    ],{
        duration: 250,
        direction: 'alternate',
        iterations: Infinity,
        ease: 'ease-in-out'
    })


// Animaciones generadas por CSS

// pelota.addEventListener('animationiteration', event => {
//     console.log(event)
// })

// pelota.onanimationiteration = e => {
//     console.log(e)
// }

// Animaciones generadas por JS
let topPx = 100
let toggler = false
rebota.onfinish = e => {
    const escalera = pelota.animate([
        {
            top: `${topPx}px`
        },
        {
            top: `${topPx+100}px`
        }
    ],{
        duration: 500,
        fill: 'forwards',
        easing: 'linear',
        direction: toggler ? 'reverse': 'normal' 
    })

    rebote.pause()
    escalera.onfinish = e => {
        rebota.reverse()
        if(topPx >= 400 || topPx <= -200) {
            toggler = !toggler
        }
        if(!toggler) {
            topPx += 100
        } else {
            topPx -= 100
        }
        rebote.play()
    }
}