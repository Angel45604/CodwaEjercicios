const btn_menu = document.querySelector('.icon')
const menu = document.querySelector('.menu')
const body = document.body
const chk_animation = document.querySelector('#magia')
let toggle = true

btn_menu.addEventListener('click', e => {
    dir = toggle ? 'normal' : 'reverse'
    const animation_menu = menu.animate([
        // keyframes
        {left: '-25vw'},
        {left: '0vw'}],
        {
        // options
        easing: 'ease-in-out',
        duration: 500,
        direction: dir,
        fill: 'forwards'
        }
    )
    
    const animation_body = body.animate(
        // keyframes
        [{backgroundColor: '#FE7F2D'},
         {backgroundColor: '#7A3101'}],
        // options
        {
            easing: 'ease-in-out',
            duration: 500,
            direction: dir,
            fill: 'forwards'
        }
    )

    chk_animation.checked = toggle ? true : false
    toggle = !toggle
})