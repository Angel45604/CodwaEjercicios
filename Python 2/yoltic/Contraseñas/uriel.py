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

def main():
    print('Inicia sesión')
    op = input('Usuario:')
    op1 = input('Contraseña:')
    print('')
    print('1) funcion protegida')
    print('2) funcion normal')
    print('')
    op2 = input('¿Que quieres hacer\n')
    if op2 == '1':
        op35 = input('Contraseña:')
        funcion_protegida(contra=op35,segunda=op1)
    elif op2 == '2':
        funcion_normal()
    else:
        print('opción no vlaida')


if __name__ == '__main__':
    main()
