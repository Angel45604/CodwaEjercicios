const ball = document.querySelector('.ball')
const pause = document.querySelector('.pause')
const stop = document.querySelector('.stop')
const reverse = document.querySelector('.reverse')
const speedm = document.querySelector('.speedm')
const speedp = document.querySelector('.speedp')

const ds = ball.animate([
    {
        left: '0',
        offset: 0
    },
    {
        left: '83%',
        offset: 1
    }
],{
    easing: 'linear',
    duration: 2000,
    direction: 'alternate',
    iterations: Infinity
})
console.log(ds)
pause.addEventListener('click', e=>{
    if(ds.playState=="running"){
        ds.pause() 
        pause.innerHTML= 'Play'
    }
    // if(ds.playbackRate == 0) {
    //     ds.play()
    //     pause.innerHTML= 'Pause'
    // }
    else {
        // ds.reverse()
        ds.play()
        pause.innerHTML= 'Pause'
    }
})

stop.addEventListener('click', e=>{
        ds.cancel() 
        pause.innerHTML= 'Play'
        ds.playbackRate = 1
})

reverse.addEventListener('click', e=>{
    ds.reverse()
})

speedp.addEventListener('click', e=>{
    ds.playbackRate += 0.1
})

speedm.addEventListener('click', e=>{
    if (ds.playbackRate > 0){
        ds.playbackRate -= 0.1
    }
    else {
        ds.playbackRate = 0
    }
})
