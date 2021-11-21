
from django.db import models
from django.contrib import admin


class Producto(models.Model): 
    
    #us = models.ForeignKey('UserStory',on_delete=models.CASCADE, blank=False, null=False)

    nombre = models.CharField(max_length=200, blank=False, null=False)
    precio = models.PositiveIntegerField(blank=False, null=False)
    existencia = models.PositiveIntegerField(blank=False, null=False)


    

    class Meta:
        """Con este tipo de restricción, se especifica que los valores ingresados en la columna deben cumplir la regla o formula especificada
        """
        # constraints = [
        #     models.CheckConstraint(
        #         name="DuracionDebeEstarEntre:1-1000",
        #         check=models.Q(duracion_estimada__range=(1, 1000)),
        #     ),
        # ]

        db_table="Producto"

admin.site.register(Producto)

