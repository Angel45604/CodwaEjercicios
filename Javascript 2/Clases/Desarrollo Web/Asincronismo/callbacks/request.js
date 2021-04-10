const API = 'https://swapi.dev/api/people/'

function fetchData(url_api, callback) {
    const xhttp = new XMLHttpRequest
    xhttp.open('GET', url_api)
    xhttp.onreadystatechange = event => {
        if (xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                return callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ' + url_api)
                return callback(error, null)
            }
        }
    }
    xhttp.send()
}

console.log('antes')
fetchData(API+'1', (error, data) => {
    if(error)
        return console.error(error)
    fetchData(API+'2', (error2, data2) => {
        if(error2)
            return console.error(error)
        fetchData(API+'3', (error3, data3) => {
            if(error3)
                return console.error(error3)
            console.log(data)
            console.log(data2)
            console.log(data3)
        })
    })
})

//Ejemplo de otra funcion asincrona
// console.log('despues')
// console.log('antes')
// setTimeout(() => console.log('hola'), 0)
// console.log('despues')

//Ejemplo de instrucciones NO asincronas
// console.log('antes')
// for(let i = 0; i < 10000000000; i++) {

// }
// console.log('despues')

