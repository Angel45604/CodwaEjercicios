
# pares = []
# for numero in range(0,100):
#     pares.append(numero ** 2)


# pares = [numero**2 for numero in range(0,100)]
# print(pares)

# cuadrados = {}
# for numero in range(0,20):
#     cuadrados[numero] = numero **2

# cuadrados = {numero: numero **2 for numero in range(0,20)}

# print(cuadrados)

# def esPrimo(numero):
#     for i in range(2,numero):
#         if numero % i==0:
#             return False
#     return True

# primos = []
# for numero in range(2,100):
#     if esPrimo(numero):
#         primos.append(numero)
    
# primos = [numero for numero in range(2,100) if esPrimo(numero)]
# print(primos)



#0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
#3
#0, 1, 1

#7

#0,     1,  2, 3, 4, 5, 6
#i-2   i-1  i
# 0,    1,  1, 2, 3, 5, 8,
# def fibonacci(n):
#     fibo = [0, 1]
#     for i in range (2,n):
#         nuevoElemento =fibo[i-1] + fibo[i-2]
#         fibo.append(nuevoElemento)
#     return fibo
#          0,1,2,3,4,5
# lista = [5,1,0,3,7,9]
#         [1,5,3,7,9]
#         [0,5,1,3,7,9]
#         [0,1,5,3,7,9]
#         [0,1,3,5,7,9]
# [0, 1, 3, 5, 7, 9]


def ordenar(lista):
    for n in range(0, len(lista)):
        elemento = lista[n]
        for i in range(n + 1, len(lista)):
            otroElemento = lista[i]
            if elemento > otroElemento:    
                lista[n] = otroElemento
                lista[i] = elemento
                elemento = otroElemento
    return lista