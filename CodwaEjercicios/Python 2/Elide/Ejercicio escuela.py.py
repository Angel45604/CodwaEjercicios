# escuela = []

class Alumno:
    def __init__(self, nombre, edad, boleta, materias):
        self.__nombre = nombre
        self.__edad = edad
        self.__boleta = boleta
        self.__materias = materias

    def toString(self):
        return f'Nombre: {self.nombre}, \nEdad: {self.edad}, \nBoleta: {self.boleta}, \nMaterias: {self.materias}'

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

def main():
    escuela = []
    while True:
        print('Selecciona una opcion')
        print('1) Añadir un alumno')
        print('2) Ver todos los alumnos')
        print('3) Borrar un alumno')
        print('4) Anadir materias a un alumno')
        print('5) Imprimir promedio de un alumno')
        print('')
        opc = input('')
        if opc == '1':
            nombre = input('Nombre: ')
            edad = int(input('Edad: '))
            boleta = int(input('Boleta: '))
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
            alumno = Alumno(nombre, edad , boleta, materias)
            escuela.append(alumno)
            print('Alumno agregado')
            print('')
        elif opc == '2':
            for alumno in escuela:
                print(alumno.toString())
            print('')
        elif opc == '3':
            boleta = int(input('Que boleta deseas borrar? '))
            borrado = False
            for i in range(len(escuela)):
                if boleta == escuela[i].boleta:
                    del escuela[i]
                    borrado = True
                    print('Alumno borrado con exito')
            if not borrado:
                print('No se encontro')
            print('')
        elif opc == '4':
            boleta = int(input('Que boleta deseas modificar? '))
            agregado = False
            for alumno in escuela:
                if boleta == alumno.boleta:
                    while True:
                        Nombremateria = input('Ingresa una nueva materia: ')
                        calificacion = int(input('Ingresa una calificacion: '))
                        alumno.materias[Nombremateria] = calificacion
                        agregado = True
                        otra = input('Quieres agregar otra materia? si/no ')
                        print('')
                        if otra == 'no':
                            print('Ok Sus materias han sido agregadas ')
                            break
            if not agregado:
                print('No se encontro el alumno')
            print('')
        elif opc == '5':
            boleta = int(input('Que boleta deseas promediar? '))
            promediado = False
            for alumno in escuela:
                if boleta == alumno.boleta:
                    print(alumno.promedio())
                    promediado = True 
            if not promediado:
                print('No se encontro la boleta')
            print('')
                


if __name__ == '__main__':
    # materias = {'matematicas': 9, 'espanol': 7, 'historia': 10}
    # alumno = Alumno('Angel', 19, '2019640580', materias)
    # print(alumno.toString())
    # alumno.materias['biologia'] = 9
    # print(alumno.toString())
    main()