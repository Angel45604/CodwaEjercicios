const menu = document.querySelector(".modal")
const mclick = document.querySelector(".mclick")
const bclick = document.querySelector("body")
const hclick = document.querySelector("header")


const animation = menu.animate([
    {
        transform: "translateY(60vh) scale(0,0)",
        offset: 0
    },{
        transform: "translateY(60vh) scale(1,1)",
        offset: 0.25
    },{
        transform: "translateY(0vh) scale(1,1)",
        offset: 1
    }
    ],{
        easing: 'linear',
        fill: 'forwards',
        duration: 250,
        iterations: 1,
        direction: 'normal'
    })
animation.cancel()

const animationb = bclick.animate([
    {   left: 0,
        offset:0
    },{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        offset: 1
    }
],{
    easing: 'linear',
    fill: 'forwards',
    duration: 250,
    direction: 'normal',
    iterations: 1
})
animationb.pause()
console.log(animation)

const bshadow = mclick.animate([
    {
        backgroundColor: 'white',
        offset: 0
    },{
        backgroundColor:'rgba(0, 0, 0, 0.02)',
        offset: 1
    }
],{
    easing: 'linear',
    fill: 'forwards',
    duration: 250,
    direction: 'normal',
    iterations: 1
})
bshadow.pause()

mclick.addEventListener('click', () =>{
    if(animation.playState != "finished"){
        animation.play()
        animationb.play()
        bshadow.play()
    }
})

bclick.addEventListener('click', (e) =>{
    console.log(e.target)
    if (animation.playState == "finished" && e.target == bclick || e.target == hclick){
        animation.reverse() 
        animationb.reverse()
        bshadow.reverse()   
        animationb.onfinish = e => {
            animation.playbackRate = 1
            animationb.playbackRate = 1
            bshadow.playbackRate = 1
            animation.cancel()
            animationb.cancel()
            bshadow.cancel()
            animationb.onfinish = null
        }
    }
})