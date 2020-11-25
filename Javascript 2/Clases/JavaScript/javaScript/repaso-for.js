let lista = ['uno', 'dos', 'tres', 'cuatro', 'cinco']

for(let i = 0; i < lista.length; i++) {
    console.log(i)
}

for(let valor of lista) {
    console.log(valor)
}

lista.forEach((e) => {
    console.log(e)
})

let tortuga = {
    cabeza: 2,
    nombre: 'Tortuga',
    edad: 190,
    nadar: false 
}

for(let k in tortuga) {
    console.log(k, tortuga[k])
}

