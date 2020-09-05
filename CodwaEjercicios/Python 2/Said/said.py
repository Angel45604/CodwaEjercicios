from persona import Persona

# ------------------------------------------------- DECORADOR --------------------------------------------------------

def protegido(func):
    
    def wrapper(*args, **kwargs):

        userValid = False
        counter = 0;

        with open('registro.txt', 'r') as f:
            for data in f:
                data.strip('\n')
                account_name, account_password, account_money = data.split('.')

                if 'usr' in kwargs:

                    if kwargs['psw'] == account_password and kwargs['usr'] == account_name:
                        kwargs['Persona'].saldo = int(account_money)
                        kwargs['Persona'].index = counter
                        userValid = True

                elif kwargs['psw'] == account_password:
                    userValid = True

                counter += 1

        if userValid == False:
            print('El usuario o la contraseña ingresada es incorrecta')
        else:
            return func(*args,**kwargs)
    
    return wrapper

# -------------------------------------------- NUEVO USUARIO ------------------------------------------------------

def nuevoUsuario():

    repeated = False
    user = input('Ingrese su nombre de usuario: ')
    password = input('Ingrese su contraseña: ')
    saldo = input('Ingrese la cantidad de dinero que quiere tener en su cuenta: ')

    with open('registro.txt', 'r') as f:
        for data in f:
            account = data.strip('\n')
            account_name, account_password, account_money = account.split('.')

            if account_name == user:
                repeated = True
                print('Sacate a la cola, este usuario ya existe, nos quieres hackear')

    if not repeated:    
        with open('registro.txt', 'a+') as f:
            f.write( user + '.' + password + '.' + saldo + '\n')  
# ------------------------------------------- INICIAR SESIÓN -------------------------------------------------------

@protegido    
def iniciarSesion(usr, psw, Persona):
    repeat = True

    while repeat:
        print(f'\nBienvenido {usr}, ¿qué acción desea realizar?')
        print('1) Consultar saldo')
        print('2) Retirar saldo')
        print('3) Depositar saldo')
        print('4) Salir')

        userInput = int(input())

        if userInput == 1:
            consultarSaldo(Persona)

        elif userInput == 2:
            ## Sólo compruebo la contraseña
            psw = input('Ingrese de nuevo la contraseña para comprobar que es usted: ')
            retirarSaldo(psw = psw, Persona = Persona)

        elif userInput == 3:
            psw = input('Ingrese de nuevo la contraseña para comprobar que es usted: ')
            depositarSaldo(psw = psw, Persona = Persona)

        elif userInput == 4:
            break

        else:
            print('No ha escogido una opción válida')

        userInput = input('¿Desea realizar algun otro cambio en su cuenta? Y/N').lower()

        if userInput == 'n':
            repeat = False;

# ------------------------------------------- CONSULTAR SALDO --------------------------------------------------------

def consultarSaldo(Persona):
    print(f'Su saldo es: {Persona.saldo}')

# ------------------------------------------- ACTUALIZAR SALDO ------------------------------------------------------

def update_money(Persona, old_money_value):

    with open('registro.txt', 'r+') as f:
        index = Persona.index
        data = f.readlines()
        account = data[index].strip('\n')
        account_name, account_password, account_money = account.split('.')
        updated_account = account_name +'.' + account_password + '.' + str(Persona.saldo) + '\n'
        data.remove(data[index])
        data.append(updated_account)
        Persona.index = data.index(updated_account)

    print(data)

    with open('registro.txt', 'w') as f:
        f.writelines(data)

# --------------------------------------------- RETIRAR SALDO --------------------------------------------------------

@protegido
def retirarSaldo(psw,Persona):
    withdraw = int( input('Ingrese la cantidad de saldo que desea retirar') )
    current_money = Persona.saldo

    if withdraw <= current_money:
        Persona.saldo = current_money - withdraw
        update_money(Persona, current_money)
                
    else:
        print(f'El saldo que desea retirar es mayor al disponible: {current_money}')

# ---------------------------------------------- DEPOSITAR SALDO ------------------------------------------------------

@protegido
def depositarSaldo(psw, Persona):
    current_money = Persona.saldo
    deposit = int( input('\nIngrese la cantidad de dinero que desea depositar: ') )
    Persona.saldo += deposit
    update_money(Persona, current_money)
        
    print(f'Su saldo es: {Persona.saldo}')

        
# --------------------------------------------------- MAIN ------------------------------------------------------------

def main():

    print('Este es el nuevo banco, ¿qué quiere hacer? \n')
    print('1) Registar un nuevo usuario')
    print('2) Iniciar sesion')

    try:
        userInput = int( input('Escriba bien su opción o le quito $1000 cada vez que se equivoque: ') )

    except:
        print('Lo siento se le han retirado $1000, vuelva a ingresar la opción correcta :)')

    else:
        if userInput == 1:
            print('Ha elegido registrar a un señor')
            nuevoUsuario()

        elif userInput == 2:
            print('Ha elegido iniciar sesion')
            usr = input('Ingrese su nombre de usuario ')
            psw = input('ingrese su contraseña ')

            account = Persona(usr, psw)

            iniciarSesion(usr = usr, psw = psw, Persona = account)

        else:
            print('No ha escogido alguna de las dos opciones, se le retirarán $1000, intente de nuevo :)')

    finally:

        userInput = input('Desea realizar alguna otra acción? Y/N ').lower()

        if userInput == 'y':
            main()
        else:
            print('Ai nos vemos')



if __name__ == '__main__':
    main()

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