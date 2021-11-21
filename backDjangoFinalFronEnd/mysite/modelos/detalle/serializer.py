from rest_framework import routers, serializers, viewsets
from mysite.modelos.detalle.model import Detalle  

from mysite.modelos.cabecera.serializer import CabeceraUpdateSerializer,CabeceraReadSerializer  
from mysite.modelos.cabecera.model import Cabecera

from mysite.modelos.producto.serializer import ProductoUpdateSerializer,ProductoReadSerializer  
from mysite.modelos.producto.model import Producto

"""La clase HyperlinkedModelSerializer es similar a la clase ModelSerializer excepto que usa hipervínculos para representar relaciones, en lugar de claves primarias. De forma predeterminada, el serializador incluirá un campo de URL en lugar de un campo de clave principal. El campo de URL se representará mediante un campo de serializador HyperlinkedIdentityField, y cualquier relación en el modelo se representará mediante un campo de serializador HyperlinkedRelatedField."""
class DetalleReadSerializer(serializers.HyperlinkedModelSerializer):
    """**Clase DetalleReadSerializer**"""
    """Clase para serializar los datos de la tabla Detalle de la db, los campos miembro, us y sprint son instancias en donde se serializan de forma distinta De forma predeterminada, todos los campos del modelo de la clase se asignarán a los campos del serializador correspondientes.
    """
    cabecera = CabeceraReadSerializer()
    producto = ProductoReadSerializer()
    class Meta:
        model = Detalle
        fields = ['id','cabecera','producto','cantidad','subtotal']

class DetalleUpdateSerializer(serializers.HyperlinkedModelSerializer):
    """**Clase DetalleUpdateSerializer**"""
    """Clase para serializar los datos de la tabla Detalle de la db
    """
    cabecera = serializers.PrimaryKeyRelatedField( queryset=Cabecera.objects.all(), many=False )
    producto = serializers.PrimaryKeyRelatedField( queryset=Producto.objects.all(), many=False )

    class Meta:
        model = Detalle
        fields = ['id','cabecera','producto','cantidad','subtotal']