class Usuario:
    def __init__(self,contra):
        self.__contra= contra
        
    
    def guardar(self):
        return f'Contraseña: {self.contra}'
    
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
    