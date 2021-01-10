let player_area     = document.querySelector('#player-area')
let user_choice     = document.querySelector('#user-play')
let player_points   = document.querySelector('#player-points')
let opponent_points = document.querySelector('#opponent-points')
let opp_choice      = document.querySelector('#opp-icon')
let result    = document.querySelector('#results') 
let results   = result.children 
const buttons = player_area.children

// Constantes para modificar algunos estilos en el transcurso del programa
const default_border = "5px solid #14F782"
const default_bg = "transparent"

for(let i=0; i<results.length; i++){
    console.log(results[i])
}

let rock = {
    type: 'rock',
    name: 'Piedra',
    icon: '<img src="https://www.flaticon.es/svg/static/icons/svg/2206/2206698.svg" alt="Piedra" class="rock" style="width: 6vw">',
    value: 1
}

let paper = {
    type: 'paper',
    name: 'Papel',
    icon: '<img src="https://www.flaticon.es/svg/static/icons/svg/1390/1390953.svg" alt="Papel" class="paper" style="width: 6vw">',
    value: 2
}

let scissors = {
    type: 'scissors',
    name: 'Tijeras',
    icon: '<img src="https://www.flaticon.es/svg/static/icons/svg/1467/1467431.svg" alt="Tijeras" class="scissors" style="width: 6vw">',
    value: 3
}

let draw = {
    type: 'draw',
    name: 'Empate'
}

let items = [rock,paper,scissors]

function compare(v1,v2) {
    result = v1 + v2
    if (v1 == v2) {
        return draw
    }
    switch(result) {
        case 3:
            return paper
        case 4:
            return rock
        case 5:
            return scissors
    }
}

player_area.addEventListener('click', (event) => {
    let match_result = ''
    // Get the player selection
    selected = event.target.className
    // Player is the object selected
    player = items.find(element => element.type == selected)
    // Hide the buttons and show the player election
    for(let i=0; i<buttons.length; i++){
        if(buttons[i].className == player.type && buttons[i].nodeName == 'BUTTON'){
            buttons[i].style.border = "6px solid #FCA311"
            buttons[i].style.backgroundColor = "rgba(252,163,17,0.4)"
        } else if(buttons[i].nodeName == 'BUTTON'){
            buttons[i].style.border = default_border
            buttons[i].style.backgroundColor = default_bg
        }
    }

    let i = Math.floor(Math.random() * items.length)
    // Random opponent
    let opponent = items[i]
    opp_choice.innerHTML = opponent.icon

    winner = compare(player.value, opponent.value)
    console.log('Gana',winner.name)

    if (winner == draw) { 
        match_result = 'draw'
    }
    else if( winner === player ) {
        match_result = 'win'
        player_points.innerHTML = String(parseInt(player_points.innerHTML) + 1)
    }
    else {
        match_result = 'lose'
        opponent_points.innerHTML = String(parseInt(opponent_points.innerHTML) + 1)
    }

    for(let i=0; i<results.length; i++){
        if(results[i].id == match_result){
            results[i].style.display = "block"
        } else{
            results[i].style.display = "none"
        }
    }
})