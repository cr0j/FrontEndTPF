
from django.db import models
from django.contrib import admin


class Cliente(models.Model): 
    
    #us = models.ForeignKey('UserStory',on_delete=models.CASCADE, blank=False, null=False)


    ruc = models.CharField(max_length=200, blank=False, null=False)
    nombre = models.CharField(max_length=200, blank=False, null=False)
    email = models.EmailField(max_length=200,blank=False, null=False)


    def __str__(self):
        """Retorna el nombre del objeto actual return nombre del objeto actual
        """
        return self.nombre

    class Meta:
        """Con este tipo de restricción, se especifica que los valores ingresados en la columna deben cumplir la regla o formula especificada
        """
        # constraints = [
        #     models.CheckConstraint(
        #         name="DuracionDebeEstarEntre:1-1000",
        #         check=models.Q(duracion_estimada__range=(1, 1000)),
        #     ),
        # ]

        db_table="Cliente"

admin.site.register(Cliente)

