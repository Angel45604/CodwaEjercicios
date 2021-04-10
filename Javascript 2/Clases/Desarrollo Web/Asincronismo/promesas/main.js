const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Se cumplió la promesa')
        } else {
            reject('NO se cumplió la promesa :(')
        }
    })
}


// somethingWillHappen().then(response => {
//     console.log(response)
// }).catch(err => {
//     console.error(err)
// })

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve('True')
            }, 3000)
        } else {
            const error = new Error('Se rechazó la promesa :(')
            reject(error)
        }
    })
} 

// somethingWillHappen2().then(response => {
//     console.log(response)
// }).catch(err => {
//     console.error(err)
// })

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of responses', response)
    })
    .catch(err => {
        console.error(err)
    })