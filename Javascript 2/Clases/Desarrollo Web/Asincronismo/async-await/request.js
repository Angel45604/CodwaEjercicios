const API = 'https://swapi.dev/api/people/2'

// function fetchData(url_api) {
//     return new Promise((resolve, reject) => {
//         const xhttp = new XMLHttpRequest
//         xhttp.open('GET', url_api)
//         xhttp.onreadystatechange = (() => {
//             if (xhttp.readyState === 4) {
//                 (xhttp.status === 200) 
//                     ? resolve(JSON.parse(xhttp.responseText))
//                     : reject(new Error('Error', url_api))
                
//             }
//         })
//         xhttp.send()
//     })
// }

// const anotherFunction = async (url_api) => {
//     try {
//         const data1 = await fetchData(url_api+'1')
//         const data2 = await fetchData(url_api+'2')
//         const data3 = await fetchData(url_api+'3')
//         console.log(data1)
//         console.log(data2)
//         console.log(data3)

//     } catch(error) {
//         console.error(error)
//     }
// }

// anotherFunction(API)

// fetch(API)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err))

const fetchData = async (url_api) => {
    try {
        //woao
        // let response = await (await fetch(url_api)).json()
        let response = await fetch(url_api)
        let data = await response.json()
        console.log(data)
    } catch(err) {
        console.error(err)
    }
}

fetchData(API)

