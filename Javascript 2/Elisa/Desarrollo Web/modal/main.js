const p = document.querySelector('.p')
const em = document.querySelector('.em')
const c = document.querySelector('.c')
const b = document.querySelector('.bgd')

const n = b.animate([
    {
        backgroundColor: 'white',
        offset: 0
    },
    {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        offset: 1
    } 
],{
    easing: 'linear',
    duration: 300,
    fill: 'forwards'
})

const d = em.animate([
    {
        bottom: '-70vh',
        offset: 0
    },
    {
        bottom: '-40vh',
        offset: 1
    }
],{
    easing: 'linear',
    duration: 300,
    fill: 'forwards'
})
d.cancel()
n.cancel()

c.addEventListener('click',e=>{
    d.play()
    n.play()
    b.style.display = 'block'
    em.style.display = 'grid'
})

b.addEventListener('click', ev=>{
    if(ev.target==b){
        d.reverse()
        n.reverse()
        d.onfinish  = ed =>{
            d.playbackRate = '1'
            n.playbackRate = '1'
            b.style.display = 'none'
            em.style.display = 'none'
            d.onfinish = null
        }
    }
})