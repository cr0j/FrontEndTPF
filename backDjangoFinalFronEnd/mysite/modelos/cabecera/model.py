
from django.db import models
from django.contrib import admin

from mysite.modelos.cliente.model import Cliente
class Cabecera(models.Model): 
    
    #us = models.ForeignKey('UserStory',on_delete=models.CASCADE, blank=False, null=False)


    
    nro_factura = models.PositiveIntegerField(blank=False, null=False)
    fecha = models.DateField(max_length=200, blank=False, null=False)
    cliente = models.ForeignKey(Cliente, on_delete=models.PROTECT, blank=False, null=False) # no se puede eliminar cliente si ya tiene una factura registrada
    total = models.PositiveIntegerField(blank=True, null=True)


  

    class Meta:
        """Con este tipo de restricción, se especifica que los valores ingresados en la columna deben cumplir la regla o formula especificada
        """
        # constraints = [
        #     models.CheckConstraint(
        #         name="DuracionDebeEstarEntre:1-1000",
        #         check=models.Q(duracion_estimada__range=(1, 1000)),
        #     ),
        # ]

        db_table="Cabecera"

admin.site.register(Cabecera)

