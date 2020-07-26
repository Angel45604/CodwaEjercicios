# CodwaEjercicios
Ejercicios de CodWA

## Javascript 2
### Ejercicios
- ####Arreglo de nombres a objeto

```javascript
nombres.sort()
let newNombres = {}
nombres.forEach(e => {
    newNombres[e[0]] = newNombres[e[0]] || []
    let nombreSeparado = e.split(' ')
    newNombres[e[0]].push(mayusculizar(nombreSeparado[0]) + ' ' + mayusculizar(nombreSeparado[1]))
})

function mayusculizar(palabra) {
    return palabra[0].toUpperCase() + palabra.slice(1)
}
```
- ####Ejercicio 2
    

### Integrantes
- **[Angel Marcos Montes](https://github.com/Angel45604)**

## Python 2
- **[Otro chavo](https://megustanlosmemes.com)**
