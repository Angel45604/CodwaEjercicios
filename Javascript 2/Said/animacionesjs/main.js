const ball = document.querySelector('#ball')
const btn_pause = document.querySelector('#pause')
const btn_stop = document.querySelector('#stop')
const btn_reverse = document.querySelector('#reverse')
const btn_decspeed = document.querySelector('#dec_speed')
const btn_incspeed = document.querySelector('#inc_speed')
let toggle_animation = true
let t_animation = 1500      // Tiempo de la animacion

const move = ball.animate([
    {left:'0'},
    {left:'calc(100% - 15vh)'}
    ], 
    {
        easing: 'linear',
        duration: 1500,
        direction: 'alternate',
        iterations: Infinity
    })


btn_pause.addEventListener('click', event =>{

    if(toggle_animation) {
        move.pause()
        btn_pause.innerHTML = 'Play'
    }
    else {
        move.play()
        btn_pause.innerHTML = 'Pause'
    }
    
    toggle_animation = !toggle_animation
})

btn_stop.addEventListener('click', event => {
    move.cancel()
    toggle_animation = false
    btn_pause.innerHTML = 'Play'
    move.playbackRate = 1.0
})

btn_reverse.addEventListener('click', event => {
    move.reverse()
    move.play()
})

btn_decspeed.addEventListener('click', event => {
    move.playbackRate >= 0 ? move.playbackRate -= 0.05 : move.playbackRate = 0
})

btn_incspeed.addEventListener('click', event => {
    move.playbackRate += 0.05
})

move.onfinish = f => {
    move.reverse()
}