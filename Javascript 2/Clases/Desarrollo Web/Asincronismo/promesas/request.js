const API = 'https://swapi.dev/api/people/'

function fetchData(url_api) {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest
        xhttp.open('GET', url_api)
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {
                (xhttp.status === 200) 
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url_api))
                
            }
        })
        xhttp.send()
    })
}

console.log('Antes')

fetchData(API+'1')
    .then(data => {
        console.log(data)
        return fetchData(API+'2')
    })
    .then(data => {
        console.log(data)
        return fetchData(API+'3')
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error(error)
    })

console.log('Despues')