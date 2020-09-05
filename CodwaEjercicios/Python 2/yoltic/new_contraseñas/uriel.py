from usuario import Usuario

def protegida(func_parametro):
    def wrapper(*args,**kwargs):
        if kwargs['contra'] == kwargs['segunda']:
            return func_parametro(*args,*kwargs)
        else:
            print('no te acordaste')
    return wrapper



@protegida
def funcion_protegida(contra, segunda): 
        print('si te acordaste')
        

def funcion_normal():
   print('elegiste la opción más fácil')

def guardar(contra, usuario):
    with open('nuevoUsuario.txt', 'a') as f:
        f.write(f'{usuario}|{contra}|\n')

def leer():
    with open('nuevoUsuario.txt', 'r') as f:
        print('Tus datos guardados son:')
        for line in f:
            dat = line.split('|')
            print(f"""Usuario: {dat[1]}
Contraseña: {dat[0]}
            """)

def comparartxt(usuario, contra):
     with open('nuevoUsuario.txt', 'r') as f:
        tmp = False
        for line in f:
            guardado = line.split('|')
            if guardado[0] == usuario and guardado[1] == contra:
                tmp = True
        return tmp


def main():
    print('1) Registrarse.')
    print('2) Iniciar sesión.')
    inicio = input('¿Que quieres hacer?')
    if inicio == '1':
        print('')
        op = input('Usuario:')
        op1 = input('Contraseña:') 
        guardar(op1,op)     
        leer()
    elif inicio == '2':
        print('')
        op = input('Usuario:')
        op1 = input('Contraseña:')
        print('')
        comparartxt(op,op1)
        if comparartxt(op,op1) == True:
            print('1) funcion protegida')
            print('2) funcion normal')
            op2 = input('¿Que quieres hacer')
            if op2 == '1':
                op35 = input('Contraseña:')
                funcion_protegida(contra=op35,segunda=op1)
            elif op2 == '2':
                funcion_normal()
            else:
                print('opción no valida')
        else:
            print('Tu usuario/contraseña es incorrecto')
    else:
        print('opción no valida')

    


if __name__ == '__main__':
    main()
