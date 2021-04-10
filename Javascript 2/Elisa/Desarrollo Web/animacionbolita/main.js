const ball = document.querySelector('.o')
const tw = document.querySelector('.tw')
const tr = document.querySelector('.tr')
const fo = document.querySelector('.fo')
const fi = document.querySelector('.fi')

const mo1 = tw.animate([
    {
        transform: 'TranslateX(0)',
        offset: 0
    },
    {
        transform: 'TranslateX(7vh)',
        offset: 1
    }
],{
    easing: 'ease-out',
    duration: 300,
    direction: 'alternate',
    fill: 'forwards'
})
console.log(mo1)
const mo2 = tr.animate([
    {
        transform: 'TranslateX(0)',
        offset: 0
    },
    {
        transform: 'TranslateX(14vh)',
        offset: 1
    }
],{
    easing: 'ease-out',
    duration: 300,
    direction: 'alternate',
    fill: 'forwards',
})
const mo3 = fo.animate([
    {
        transform: 'TranslateX(0)',
        offset: 0
    },
    {
        transform: 'TranslateX(21vh)',
        offset: 1
    }
],{
    easing: 'ease-out',
    duration: 300,
    direction: 'alternate',
    fill: 'forwards'
})
const mo4 = fi.animate([
    {
        transform: 'TranslateX(0)',
        offset: 0
    },
    {
        transform: 'TranslateX(28vh)',
        offset: 1
    }
],{
    easing: 'ease-out',
    duration: 300,
    direction: 'alternate',
    fill: 'forwards'
})
mo1.cancel()
mo2.cancel()
mo3.cancel()
mo4.cancel()

ball.addEventListener('click', e=>{
    if (mo1.playState == "finished"){
        mo1.reverse()
        mo2.reverse()
        mo3.reverse()
        mo4.reverse()
    }
    else{
        mo1.play()
        mo2.play()
        mo3.play()
        mo4.play()
    }
})