const modal = document.querySelector('#modal')
const btn_yes = document.querySelector('#yes')
const bg_op = document.querySelector('.bg_op')

// Eventlistener de btn_yes con animacion de Modal
btn_yes.addEventListener('click', e => {
    const animate_modal = modal.animate(
        [
            {top:'calc(100% + 75px)'},
            {top:'calc(30% - 75px)'}
        ],
        {
            easing:'ease-in-out',
            duration: 500,
            fill: 'forwards'
        })
    
    bg_op.style.display = 'block'
    clicked = true
})

// Hide modal when clicked outside
bg_op.addEventListener('click', event => {
    const animate_modal_hide = modal.animate(
        [
            {top:'calc(30% - 75px)'},
            {top:'calc(100% + 75px)'}
        ],
        {
            easing:'ease-in-out',
            duration: 500,
            fill: 'forwards'
        })
    bg_op.style.display = 'none'
})
