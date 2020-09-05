class Persona:
    def __init__(self, user, password, money = 0, index = 0):
        self.__user = user
        self.__password = password
        self.__saldo = money
        self.__index = index

    def __str__(self):
        return f'Usuario: {self.__user}'

    @property
    def saldo(self):
        return self.__saldo
    
    @property
    def index(self):
        return self.__index

    @saldo.setter
    def saldo(self, saldo):
        self.__saldo = saldo

    @index.setter
    def index(self, index):
        self.__index = index

        return self.__index

    @saldo.setter
    def saldo(self, saldo):
        self.__saldo = saldo

    @index.setter
    def index(self, index):
        self.__index = index

        return self.__index

    @saldo.setter
    def saldo(self, saldo):
        self.__saldo = saldo

    @index.setter
    def index(self, index):
        self.__index = index

        return self.__index

    @saldo.setter
    def saldo(self, saldo):
        self.__saldo = saldo

    @index.setter
    def index(self, index):
        self.__index = index

