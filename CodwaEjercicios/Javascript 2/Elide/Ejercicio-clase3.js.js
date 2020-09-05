let nombres = ['angelito marquitos',
'pablito cobitos',
'elisa tovar',
'elide medel',
'sofia viveros',
'juan pérez',
'jorge ramírez',
'evelyn mejia',
'tlatoani jímenez',
'uriel palomino',
'yin wo']

// let newNombres = {a: ['Angelito Marquitos'],
//                   e: ['Elide Medel', 'Elisa Tovar', 'Evelyn Mejia' ],
//                   j: ['Jorge Ramirez', 'Juan Perez'],
//                   p: ['Pablito Cobitos'],
//                   s: ['Sofia Viveros'],
//                   t: ['Tlatoani Jimenez'],
//                   u: ['Uriel Palomino'],
//                   y: ['Yin Wo']
//                   }

nombres.sort()

let newNombres = {}

nombres.forEach(e => {
    newNombres[e[0]] = newNombres[e[0]] || []
    let palabraNombre = e.split(' ')
    newNombres[e[0]].push(mayuscula(palabraNombre[0]) + ' ' + mayuscula(palabraNombre[1]))
})

function mayuscula(nombre) {
    return nombre[0].toUpperCase() + nombre.slice(1)
}
// console.log(newNombres)


console.log(newNombres)

// console.log(letrasDeNombres)

// let a = 3
// // let b = ''
// // if(a == 5) {
// //     b = 'Cinco'
// // } else {
// //     b = 'Otro numero'
// // }

// let b = a == 5 ? 'Cinco' : 'Otro numero' 

// console.log(b)