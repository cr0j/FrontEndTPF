
from django.db import models
from django.contrib import admin

from mysite.modelos.cabecera.model import Cabecera
from mysite.modelos.producto.model import Producto
class Detalle(models.Model): 
    
    #us = models.ForeignKey('UserStory',on_delete=models.CASCADE, blank=False, null=False)

    cabecera = models.ForeignKey(Cabecera, on_delete=models.PROTECT, blank=False, null=False)
    producto = models.ForeignKey(Producto, on_delete=models.PROTECT, blank=False, null=False)
    cantidad = models.PositiveIntegerField(blank=False, null=False)
    subtotal = models.PositiveIntegerField(blank=True, null=True)



    class Meta:
        """Con este tipo de restricción, se especifica que los valores ingresados en la columna deben cumplir la regla o formula especificada
        """
        # constraints = [
        #     models.CheckConstraint(
        #         name="DuracionDebeEstarEntre:1-1000",
        #         check=models.Q(duracion_estimada__range=(1, 1000)),
        #     ),
        # ]

        db_table="Detalle"

admin.site.register(Detalle)

