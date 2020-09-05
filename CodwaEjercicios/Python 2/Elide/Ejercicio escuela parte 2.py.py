# escuela = []

class Alumno:
    def __init__(self, nombre, edad, boleta, materias, grupo):
        self.__nombre = nombre
        self.__edad = edad
        self.__boleta = boleta
        self.__materias = materias
        self.__grupo = grupo

    def toString(self):
        return f'Nombre: {self.nombre}, \nEdad: {self.edad}, \nBoleta: {self.boleta}, \nMaterias: {self.materias}, \nGrupo: {self.grupo}'

    def promedio(self):
        promedio = 0
        for materia in self.__materias.values():
            promedio += materia
        promedio /=len(self.__materias.values()) 
        return promedio

    @property
    def nombre(self):
        return self.__nombre

    @nombre.setter
    def nombre(self, nombre):
        self.__nombre = nombre

    @property
    def edad(self):
        return self.__edad

    @edad.setter
    def edad(self, edad):
        self.__edad = edad

    @property
    def boleta(self):
        return self.__boleta

    @boleta.setter
    def boleta(self, boleta):
        self.__boleta = boleta

    @property
    def materias(self):
        return self.__materias

    @materias.setter
    def materias(self, materias):
        self.__materias = materias
    
    @property
    def grupo(self):
        return self.__grupo
    
    @grupo.setter
    def grupo(self,grupo):
        self.__grupo = grupo 

escuela = []
lista_grupos = {}


def anadirAlumno():
    nombre = input('Nombre: ')
    edad = int(input('Edad: '))
    boleta = int(input('Boleta: '))
    existe_grupo = True
    grupo_nuevo = ''
    while existe_grupo:
        grupo_nuevo = input('Grupo: ')
        if grupo_nuevo in lista_grupos:
            existe_grupo = False
        else:
            print('No existe el grupo')
            opc = input('Quieres crear un grupo? si/no ')
            if opc == 'si':
                lista_grupos[grupo_nuevo] = []
                print('Grupo agregado')
                existe_grupo = False
    materias = {}
    while True:
        materia = input('Ingresa una materia: ')
        calificacion = int(input('Ingresa una calificacion: '))
        materias[materia] = calificacion
        otra = input('Quieres agregar otra materia? si/no ')
        print('')
        if otra == 'no':
            print('Ok Sus materias han sido agregadas')
            break
    alumno = Alumno(nombre, edad , boleta, materias, grupo_nuevo)
    for grupo in lista_grupos:
       if grupo == grupo_nuevo:
           lista_grupos[grupo].append(alumno)
    escuela.append(alumno)
    print('Alumno agregado')
    print('')

def imprimirAlumnos():
    for alumno in escuela:
            print(alumno.toString())
    print('')

def borrarAlumno(boleta):
    borrado = False
    grupo = ''
    for i in range(len(escuela)):
        if boleta == escuela[i].boleta:
            grupo = escuela[i].grupo
            del escuela[i]
            borrado = True
            if grupo:
                for j in range(len(lista_grupos[grupo])):
                    if boleta == lista_grupos[grupo][j].boleta:
                        del lista_grupos[grupo][j]
                        print('Alumno borrado con exito')
    if not borrado:
        print('No se encontro')
    print('')
    return borrado

def añadirMaterias(boleta):
    agregado = False
    for alumno in escuela:
        if boleta == alumno.boleta:
            while True:
                Nombremateria = input('Ingresa una nueva materia: ')
                calificacion = int(input('Ingresa una calificacion: '))
                alumno.materias[Nombremateria] = calificacion
                return True
                otra = input('Quieres agregar otra materia? si/no ')
                print('')
                if otra == 'no':
                    print('Ok Sus materias han sido agregadas ')
                    break
    if not agregado:
        print('No se encontro el alumno')
    print('')
    return False 

def imprimirPromedio(boleta):
    promediado = False
    for alumno in escuela:
        if boleta == alumno.boleta:
            print(alumno.promedio())
            return True 
    if not promediado:
        print('No se encontro la boleta')
    print('')
    return False 

def buscarAlumnos(materia):
    for alumno in escuela:
        if materia in alumno.materias:
            print(alumno.toString())
    print('')

def promediosGrupo(grupo):
    promedio = 0
    for alumno in lista_grupos[grupo]:
        promedio += alumno.promedio()
    promedio /=  len(lista_grupos[grupo])
    return promedio

def removerAlumno(grupo, boleta):
    existe = False
    for i in range(len(lista_grupos[grupo])):
        if boleta == lista_grupos[grupo][i].boleta:
            del lista_grupos[grupo][i] 
            existe = True
    for alumno in escuela:
        if boleta == alumno.boleta:
            alumno.grupo = ''
    return existe

def reasignacionAlumno(grupo, boleta):
    existe = False
    for alumno in escuela:
        if boleta == alumno.boleta:
            for alumno2 in lista_grupos[grupo]:
                if boleta == alumno2.boleta:
                    return existe
            alumno.grupo = grupo
            lista_grupos[grupo].append(alumno)
            existe = True
    return existe



def main():
    while True:
        print('Selecciona una opcion')
        print('1) Añadir un alumno')
        print('2) Ver todos los alumnos')
        print('3) Borrar un alumno')
        print('4) Anadir materias a un alumno')
        print('5) Imprimir promedio de un alumno')
        print('6) Buscar alumnos por materia')
        print('7) Buscar grupo')
        print('8) Añadir grupo')
        print('')
        opc = input('')
        if opc == '1':
            anadirAlumno()
        elif opc == '2':
           imprimirAlumnos()
        elif opc == '3':
            boleta = int(input('Que boleta deseas borrar? '))
            borrarAlumno(boleta)
        elif opc == '4':
            boleta = int(input('Que boleta deseas modificar? '))
            añadirMaterias(boleta)
        elif opc == '5':
            boleta = int(input('Que boleta deseas promediar? '))
            imprimirPromedio(boleta)
        elif opc == '6':
            materia = input('Que materia deseas buscar? ')
            buscarAlumnos(materia)
        elif opc == '7':
            grupo = input('Ingresa el grupo ')
            if grupo in lista_grupos:
                print('1) Imprimir promedio del grupo')
                print('2) Ver alumnos del grupo')
                print('3) Remover alumno del grupo')
                print('4 Añadir alumno a grupo')
                opc2 = input('')
                if opc2 == '1':
                    print(promediosGrupo(grupo))
                if opc2 == '2':
                    for alumno in lista_grupos[grupo]:
                        print(alumno.toString())
                if opc2 == '3':
                    boleta = int(input('Que boleta deseas remover del grupo? '))
                    if removerAlumno(grupo, boleta):
                        print('Alumno borrado con exito')
                    else:
                        print('No se encontró el alumno')
                if opc2 == '4':
                    boleta = int(input('Que boleta deseas añadir al grupo? '))
                    if reasignacionAlumno(grupo, boleta):
                        print('El alumno ha sido añadido')
                    else:
                        print('El alumno no se encontró o ya existe en el grupo')
            else:
                print('No se encontró el grupo')
                    
        elif opc == '8':
            grupo = input('Que grupo deseas agregar? ')
            lista_grupos[grupo] = []
            print('Grupo agregado')



if __name__ == '__main__':
    #alumno = {
    # materias,
    #nombre,
    #edad
    #boleta
    #grupo
    # }



    # materias = {'matematicas': 9, 'espanol': 7, 'historia': 10}
    # alumno = Alumno('Angel', 19, '2019640580', materias)
    # print(alumno.toString())
    # alumno.materias['biologia'] = 9
    # print(alumno.toString())
    main()