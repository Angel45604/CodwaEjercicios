#TERMINAL1
import random
IMAGES = ['''
    +---+
    |   |
        |
        |
        |
        |
    =========''', '''
    +---+
    |   |
    O   |
        |
        |
        |
    =========''', '''
    +---+
    |   |
    O   |
    |   |
        |
        |
    =========''', '''
    +---+
    |   |
    O   |
   /|   |
        |
        |
    =========''', '''
    +---+
    |   |
    O   |
   /|\  |
        |
        |
    =========''', '''
    +---+
    |   |
    O   |
   /|\  |
    |   |
        |
    =========''', '''
    +---+
    |   |
    O   |
   /|\  |
    |   |
   /    |
        |
    =========''', '''
    +---+
    |   |
    O   |
   /|\  |
    |   |
   / \  |
        |
    =========''']

WORDS = [
    'lavadora',
    'secadora',
    'sofa',
    'gobierno',
    'diputado',
    'democracia',
    'computadora',
    'teclado',
]

def getPalabra():
    indice_random = random.randint(0, len(WORDS) - 1)
    palabra = WORDS[indice_random]
    return palabra


def reemplazarGuiones(guiones, indice):
    pass


def main():
    print('Hola, bienvenido al ahorcado')
    print('Adivina la palabra')
    palabra = getPalabra()
    guiones = ['_ ' for l in palabra]
    intentos = 0
    while True:
        print(IMAGES[intentos])
        letra_encontrada = False
        guiones_str = ''.join(guiones)
        print(guiones_str)
        print('Ingresa una letra')
        letra = input()
        for i in range(len(palabra)):
            if palabra[i] == letra:
                guiones[i] = letra
                letra_encontrada = True
        if not letra_encontrada:
            intentos += 1

        if intentos >= 7:
            print(IMAGES[7])
            print('Has perdido')
            break
        
        if ''.join(guiones) == palabra:
            print('GANASTE')
            break
          

if __name__ == '__main__':
    main()
