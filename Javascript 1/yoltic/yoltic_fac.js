// 4
function factorial(n) {
	let arreglo = 1
for(let i = 1; i <= n; i++){
	 arreglo*= (i)

	}
 
return arreglo
}

// 24

//1,5
function sumaDeRango(a,b) {
	let o=a
	let c=0
		for(let i = a;i<b;i++){
			o+=1+i
		}
	return o
	}
// 15

//[5, 7, 2, 1, 1, 4, 8, 7, 5]
function ordenarArreglo(arreglo) {
	 
    let a = 0
    for(let i = 0; i < arreglo.length; i++){
        a = arreglo[i]
        for(let j = i+1;j < arreglo.length; j++){
            if (a < arreglo[j]) {
            } else {
                arreglo[i] = arreglo[j]
                arreglo[j] = a
                a = arreglo[i]
            }   
        }
        
    }
    return arreglo
}
// [1, 1, 2, 4, 5,5, 7, 7, 8]