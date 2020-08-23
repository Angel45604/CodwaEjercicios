#iniciar sesion
    #usuario
    #contrasena
        #bienvenido
        #consultar saldo (no protegida)
        #retirar saldo (protegida)
        #depositar saldo (protegida)
#registrar usuario
    #nombre
    #contrasena

from usuario import Usuario

def protegida(func_parametro):
    def wrapper(*args,**kwargs):
        if kwargs['contra'] == kwargs['segunda']:
            return func_parametro(*args,*kwargs)
        else:
            print('Contraseña incorrecta.')
    return wrapper



@protegida
def mover_saldo(contra, segunda): 
        return True


def consulta_saldo(usuario, contraseña):
    with open('nuevoUsuario.txt', 'r') as f:
        for line in enumerate(f):
            #(0, 'gh|gh|25|\n')
            #n = line[0]
            guardado = line[1].split('|')
            if guardado[0] == usuario and guardado[1] == contraseña:
                return guardado[2]


def guardar(usuario, contraseña, saldo):
    with open('nuevoUsuario.txt', 'a') as f:
        f.write(f'{usuario}|{contraseña}|{saldo}\n')

def nuevo_saldo(usuario,contraseña,nuevo_saldo):
    with open('nuevoUsuario.txt', 'r') as f:
        leer = f.readlines()
        for i in range(len(leer)):
            guardado = leer[i].split('|')
            if guardado[0] == usuario:              
                #print(leer[i])
                guardado[2] = str(nuevo_saldo)
                leer[i] = f'{usuario}|{contraseña}|{nuevo_saldo}\n' 
                #print(leer[i])
        data = leer
    with open('nuevoUsuario.txt', 'w') as f:
        f.writelines(data) 
        
# def leer(usuario,contraseña, saldo):
#     with open('nuevoUsuario.txt', 'r') as f:
#         print('Tus datos guardados son:')
#         for line in f:
#             dat = line.split('|')
#             if dat[0] == usuario:
#                 print(f"""Usuario: {dat[0]}
# Contraseña: {dat[1]}
# Saldo: {dat[2]}""")


def comparartxt(usuario, contra):
     with open('nuevoUsuario.txt', 'r') as f:
        tmp = False   
        for line in f:
            guardado = line.split('|')
            if guardado[0] == usuario and guardado[1] == contra:
                tmp = True
        return tmp

def usuario_guardado(usuario):
    with open('nuevoUsuario.txt', 'r') as f:
        tmp = False
        for line in f:
            guardado = line.split('|')
            if guardado[0] == usuario:
                tmp = True
        return tmp

def main():
    while True:
        print('1) Registrarse.')
        print('2) Iniciar sesión.')
        inicio = input('¿Que quieres hacer? ')
        if inicio == '1':
            while True:
                print('')
                user = input('Usuario:')
                pasword = input('Contraseña:')
                saldo = input('ingresa la cantidad a depositar:')     
                if usuario_guardado(user):
                    print('Usuario ya existente')
                else:
                    guardar(user, pasword, saldo)     
                    #leer(user,pasword,saldo)
                print('')
                opc = input('Registrar otro usuario (si/no)')
                if opc.upper() == 'no'.upper(): 
                    break
        elif inicio == '2':
            while True:
                print('')
                user = input('Usuario:')
                pasword = input('Contraseña:')
            
                print('')
                if comparartxt(user,pasword):
                    while True:
                        print('1) retirar saldo')
                        print('2) consutar saldo')
                        print('3) depositar saldo')
                        print('4) salir')
                        op = input('¿Que quieres hacer? ')
                        if op == '1':
                            nueva_contra = input('Contraseña:')
                            if mover_saldo(contra=nueva_contra,segunda=pasword):
                                retirar = int(input('¿Que cantidad deseas retirar?\n'))
                                saldo_actual = int(consulta_saldo(user,pasword))
                                if retirar > saldo_actual:
                                    print('la cantidad que deseas retirar es mayor al saldo actual')
                                elif retirar <= saldo_actual:
                                    new_saldo = int(saldo_actual) - int(retirar)
                                    print(f'Saldo actual:{new_saldo}')
                                    nuevo_saldo(user,pasword,new_saldo)
                        elif op == '2':
                            print(f'Saldo:{consulta_saldo(user,pasword)}')
                        elif op == '3':
                            nueva_contra = input('Contraseña:')
                            if mover_saldo(contra=nueva_contra,segunda=pasword):
                                depositar = int(input('¿Que cantidad deseas depositar?\n'))
                                saldo_actual = int(consulta_saldo(user,pasword))
                                deposito = int(saldo_actual) + int(depositar)
                                print(f'Saldo actual:{deposito}')
                                nuevo_saldo(user,pasword,deposito)
                        elif op == '4':
                            break
                        else:
                            print('opción no valida')
                        opc1 = input('¿Ingresar otra opción?(si/no) ')
                        if opc1.upper() == 'no'.upper():
                            break
                    break
                else:
                    print('Tu usuario/contraseña es incorrecto')
                    opcion = input('¿Ingresar de nuevo?(si/no) ')
                    if opcion.upper() == 'no'.upper():
                        break
        else:
            print('opción no valida')

        fin = input('¿Regresar al menú principal? (si/no)\n')
        if fin.upper() == 'no'.upper():
            print('Fin. :´v')
            break
    
if __name__ == '__main__':
    main()