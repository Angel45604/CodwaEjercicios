const APIURL = 'https://www.swapi.tech/api/'
const h1 = document.querySelector('#title')
const container = document.querySelector('#container')
const fetchData = async url => {
    try {
        let response = await fetch(url, {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })

        return response.json()
    } catch(err) {
        console.error(err)
        return err
    }
}

const validURL = (str) => {
    let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

const iterateProperties = (obj) => { // :)
    let ul = document.createElement('ul')
    for(let k in obj) {
        if(k == 'url')
            continue
        let li = document.createElement('li')
        let b = document.createElement('b')
        b.textContent = k
        li.append(b)
        let a = null
        if(validURL(obj[k])) {
            a = document.createElement('a')
            a.href = '#'
            a.textContent = '...'
            a.onclick = async () => {
                let response = await fetchData(obj[k])
                let childUl = iterateProperties(response.result.properties)
                a.replaceWith(childUl)
            }
        }
        let liText = a || `: ${obj[k]}`
        li.append(liText)
        ul.append(li)
    }
    return ul
}

window.addEventListener('load', async e => {
    let people = await fetchData(`${APIURL}/people/1`)
    let ul = iterateProperties(people.result.properties)
    container.append(ul)
})

//PUNTO DE ENTRADA DEL EJERCICIO
//https://www.swapi.tech/api/films/