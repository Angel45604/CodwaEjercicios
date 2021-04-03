const title1 = document.querySelector('#title1')
const title2 = document.querySelector('#title2')
const title3 = document.querySelector('#title3')
const submenus1 = document.querySelector('#submenus1')
const submenus2 = document.querySelector('#submenus2')
const submenus3 = document.querySelector('#submenus3')


toggle1 = true
toggle2 = true
toggle3 = true

title1.addEventListener('click', e => {
    if(toggle1){
        submenus1.style.animation = 'hide_submenus  0.25s ease-in-out forwards'
    } else {
        submenus1.style.animation = 'display_submenus  0.25s ease-in-out forwards'
    }
    toggle1 = !toggle1
})

title2.addEventListener('click', e => {
    if(toggle2){
        submenus2.style.animation = 'hide_submenus  0.25s ease-in-out forwards'
    } else {
        submenus2.style.animation = 'display_submenus  0.25s ease-in-out forwards'
    }
    toggle2 = !toggle2
})

title3.addEventListener('click', e => {
    if(toggle3){
        submenus3.style.animation = 'hide_submenus  0.25s ease-in-out forwards'
    } else {
        submenus3.style.animation = 'display_submenus  0.25s ease-in-out forwards'
    }
    toggle3 = !toggle3
})