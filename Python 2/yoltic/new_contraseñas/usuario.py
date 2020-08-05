
class Usuario:
    def __init__(self,contra,nombre):
        self.__contra = contra
        self.__nombre = nombre
        
    def guarda(self):
        return f'Contraseña: {self.contra}, \nUsuario: {self.nombre}'
    
    @property
    def nombre(self):
        return self.__nombre
    
    @nombre.setter
    def nombre(self, nombre):
        self.__nombre = nombre

    @property
    def contra(self):
        return self.__nombre
    
    @nombre.setter
    def contra(self, contra):
        self.__contra = contra
    