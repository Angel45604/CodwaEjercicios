class Usuario:
    def __init__(self,contra,nombre,saldo):
        self.__contra = contra
        self.__nombre = nombre
        self.__saldo = saldo 
        
    def guarda(self):
        return f'Contraseña: {self.contra}, \nUsuario: {self.nombre}, \nSaldo: {self.saldo}'
    
    @property
    def nombre(self):
        return self.__nombre
    
    @nombre.setter
    def nombre(self, nombre):
        self.__nombre = nombre

    @property
    def contra(self):
        return self.__nombre
    
    @contra.setter
    def contra(self, contra):
        self.__contra = contra
    
    @property
    def saldo(self):
        return self.__saldo
    
    @saldo.setter
    def saldo(self, saldo):
        self.__saldo = saldo

    

