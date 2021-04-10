const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hizo algo'), 3000)
        : reject(new Error('Error de prueba'))
    })
}

const doSomething = async () => {
    const something  =  await doSomethingAsync()
    console.log(something)
}

console.log('Antes')
doSomething()
console.log('Despues')

const doSomethingAgain = async () => {
    try {
        const something  = await doSomethingAsync()
        console.log(something)
    } catch (error) {
        console.error(error)
    }
}

console.log('Antes2')
doSomethingAgain()
console.log('Despues2')