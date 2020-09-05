KEYS = {
    'a': 'w',
    'b': 'E',
    'c': 'x',
    'd': '1',
    'e': 'a',
    'f': 't',
    'g': '0',
    'h': 'C',
    'i': 'b',
    'j': '!',
    'k': 'z',
    'l': '8',
    'm': 'M',
    'n': 'I',
    'o': 'd',
    'p': '.',
    'q': 'U',
    'r': 'Y',
    's': 'i',
    't': '3',
    'u': ',',
    'v': 'J',
    'w': 'N',
    'x': 'f',
    'y': 'm',
    'z': 'W',
    'A': 'G',
    'B': 'S',
    'C': 'j',
    'D': 'n',
    'E': 's',
    'F': 'Q',
    'G': 'o',
    'H': 'e',
    'I': 'u',
    'J': 'g',
    'K': '2',
    'L': '9',
    'M': 'A',
    'N': '5',
    'O': '4',
    'P': '?',
    'Q': 'c',
    'R': 'r',
    'S': 'O',
    'T': 'P',
    'U': 'h',
    'V': '6',
    'W': 'q',
    'X': 'H',
    'Y': 'R',
    'Z': 'l',
    '0': 'k',
    '1': '7',
    '2': 'X',
    '3': 'L',
    '4': 'p',
    '5': 'v',
    '6': 'T',
    '7': 'V',
    '8': 'y',
    '9': 'K',
    '.': 'Z',
    ',': 'D',
    '?': 'F',
    '!': 'B',
    ' ': ' '
}

#ed8wD Ma 88wMd GI0a8b3d m ai3wi JbaI1d 1biIam xCwIIa8
#Ma 0,i3wI 8di MaMai
#c,a d.bIwi 1a8 xw8aI3wMbaI3d 08dEw8F

def descifrarMensaje(a):
    mensaje = []
    for i in range(len(a)):
        for e in KEYS:
            if a[i] == KEYS[e]:
                mensaje.append(e)
    return "".join(mensaje)

def cifrarMensaje(b):
    mensaje = []
    for i in range(len(b)):
        for e in KEYS:
            if b[i] == e:
                mensaje.append(KEYS[e])
    return "".join(mensaje)
def main():
    while True:
        print('Selecciona una opcion')
        print('1) Descifrar mensaje')
        print('2) Cifrar mensaje')
        print('')
        opc = input('')
        if opc == '1':  
            a = input('Ingresa el mensaje que deseas descifrar')
            print(descifrarMensaje(a))
        if opc == '2':
            b = input('Ingresa el mensaje que deseas cifrar')
            print(cifrarMensaje(b))
if __name__ == '__main__':
    main()