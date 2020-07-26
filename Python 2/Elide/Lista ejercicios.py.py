# #terminal 2
# #ejercicios

#1 dolar = 20 pesos
#5
def cambioDolar(pesos):
    dolar= pesos/20
    return dolar
#0.23

# [15, 6, 1, 2, 80]
#[1500,66,82,200,81]
def mayor(lista):
    elementoMayor = lista[0]
    for i in range(len(lista)):
        elemento= lista[i]
        for j in range (i+1, len(lista)):
            otroelemento= lista[j]
            if elementoMayor < otroelemento:
                elementoMayor = otroelemento         
    return elementoMayor
     #80
#[6,1,4,7]
#[1,6,4,7]
def ordenar(lista):
    for i in range(len(lista)):
        elemento = lista[i]
        for j in range (i+1, len(lista)):
            otroelemento= lista[j]
            if elemento > otroelemento:
                lista[i]= otroelemento
                lista[j]= elemento
                elemento= otroelemento
    return lista
    #[1,4,,7]
    
#slices
# print(lista[::-1])

#[4, 7, 1, 3, 4, 7, 2]
def removerDuplicados(lista):
    listaSinDuplicados = set(lista)
    return listaSinDuplicados

def removerDuplicadosLista(lista):
    i = 0
    longitud = len(lista)
    while i < longitud:
        elemento = lista[i]
        j = i + 1
        while j < longitud:
            otroelmento = lista[j]
            if elemento == otroelmento:
                del lista[i]
                longitud = len(lista)
                i -=1
            j += 1
        i += 1
    return lista
#     #[4, 7, 1, 3, 2]
#remueve en un indice especifico
#del a[i]

#remueve el primero que se encuentra
#a.remove(e)

#remueve el ultimo de todos
#a.pop()


#[5, 1, 3, 4]
#lista= [5, 1, 3, 4]
def suma(listaNumeros):
    Suma=0
    for i in listaNumeros:
        Suma= Suma + i
    return Suma

# print(suma([5, 1, 3, 4]))

#13

#[(2, 4),(2, 1),(2, 2),(2, 5)]
#[1,4,(2, 2),(2, 5)]

def ordenarTuplas(lista):
    for i in range(len(lista)):
        for j in range (i+1, len(lista)):
            elemento= lista[i]
            otroelemento= lista[j]
            if elemento[-1] > otroelemento[-1]:
                lista[i]= otroelemento
                lista[j]= elemento
                elemento= otroelemento  
    return lista
#[(2, 1),(2, 2),(2, 4),(2, 5)]
