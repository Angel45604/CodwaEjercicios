function suma(num1, num2) {
    console.log('dentro de suma')
    return num1 + num2
}

function calcular(num1, num2, callback) {
    console.log('haciendo calculo...')




    return callback(num1, num2)
}

console.log(calcular(3, 1, suma))
