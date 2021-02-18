const ha = document.querySelector('.a')
const me = document.querySelector('.ul')
const on = document.querySelector('.o')
const du = document.querySelector('.d')
const tr = document.querySelector('.t')

const c = me.animate([
    {
        left: '-30vw',
        offset: 0
    },
    {
        left: '0vw',
        offset: 1
    }
],{
    easing: 'linear',
    duration: 300,
    fill: 'forwards',
})

const g = on.animate([
    {
        transform: 'rotate(0deg)',
        offset: 0
    },
    {
        transform: 'rotate(-216deg) scale(0.5,1) translate(1.2vw,0vh)',
        offset: 1
    }
],{
    easing: 'linear',
    duration: 300,
    fill: 'forwards',
})

const g1 = tr.animate([
    {
        transform: 'rotate(0deg)',
        offset: 0
    },
    {
        transform: 'rotate(216deg) scale(0.5,1) translate(1.2vw,0vh)',
        offset: 1
    }
],{
    easing: 'linear',
    duration: 300,
    fill: 'forwards',
})

const g2 =du.animate([
    {
        transform: 'rotate(0deg)',
        offset: 0
    },
    {
        transform: 'rotate(180deg)',
        offset: 1
    }
],{
    easing: 'linear',
    duration: 300,
    fill: 'forwards',
})
c.cancel()
g.cancel()
g1.cancel()
g2.cancel()

ha.addEventListener('click',e=>{
    c.playState == 'finished' ? c.reverse(): c.play()
    g.playState == 'finished' ? g.reverse(): g.play()
    g1.playState == 'finished' ? g1.reverse(): g1.play()
    g2.playState == 'finished' ? g2.reverse(): g2.play()
})