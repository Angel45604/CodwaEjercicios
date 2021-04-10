const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const lf = document.querySelector('.lf')
const ls = document.querySelector('.ls')
const lt = document.querySelector('.lt')

lf.style.display = 'none'
ls.style.display = 'none'
lt.style.display = 'none'

const r = lf.animate([
    {
        transform: 'scale(1,0)',
        transformOrigin: 'top center',
        offset: 0
    },{
        transform: 'scale(1,1)',
        transformOrigin: 'top center',
        offset: 1
    }
],{
    easing: 'cubic-bezier(1,.21,.29,1.11)',
    duration: 400,
    fill: 'forwards',
})
const s = ls.animate([
    {
        transform: 'scale(1,0)',
        transformOrigin: 'top center',
        offset: 0
    },{
        transform: 'scale(1,1)',
        transformOrigin: 'top center',
        offset: 1
    }
],{
    easing: 'cubic-bezier(1,.21,.29,1.11)',
    duration: 400,
    fill: 'forwards',
})
const t = lt.animate([
    {
        transform: 'scale(1,0)',
        transformOrigin: 'top center',
        offset: 0
    },{
        transform: 'scale(1,1)',
        transformOrigin: 'top center',
        offset: 1
    }
],{
    easing: 'cubic-bezier(1,.21,.29,1.11)',
    duration: 400,
    fill: 'forwards',
})
r.cancel()
s.cancel()
t.cancel()

first.addEventListener('click', e=>{
    if (lf.style.display == 'none'){
        r.play()
        lf.style.display = 'block'
    }
    else{
        r.reverse()
        r.onfinish = e =>{
            r.playbackRate = '1'
            lf.style.display = 'none'
            r.onfinish = null
        }
    }
})

second.addEventListener('click', e=>{
    if (ls.style.display == 'none'){
        s.play()
        ls.style.display = 'block'
    }
    else{
        s.reverse()
        s.onfinish = e =>{
            s.playbackRate = '1'
            ls.style.display = 'none'
            s.onfinish = null
        }
    }
})

third.addEventListener('click', e=>{
    if (lt.style.display == 'none'){
        t.play()
        lt.style.display = 'block'
    }
    else{
        t.reverse()
        t.onfinish = e =>{
            t.playbackRate = '1'
            lt.style.display = 'none'
            t.onfinish = null
        }
    }
})