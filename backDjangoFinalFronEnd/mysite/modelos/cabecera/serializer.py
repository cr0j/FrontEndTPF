from rest_framework import routers, serializers, viewsets
from mysite.modelos.cliente.model import Cliente

from mysite.modelos.cliente.serializer import ClienteUpdateSerializer,ClienteReadSerializer  
from mysite.modelos.cabecera.model import Cabecera


"""La clase HyperlinkedModelSerializer es similar a la clase ModelSerializer excepto que usa hipervínculos para representar relaciones, en lugar de claves primarias. De forma predeterminada, el serializador incluirá un campo de URL en lugar de un campo de clave principal. El campo de URL se representará mediante un campo de serializador HyperlinkedIdentityField, y cualquier relación en el modelo se representará mediante un campo de serializador HyperlinkedRelatedField."""
class CabeceraReadSerializer(serializers.HyperlinkedModelSerializer):
    """**Clase CabeceraReadSerializer**"""
    """Clase para serializar los datos de la tabla Cabecera de la db, los campos miembro, us y sprint son instancias en donde se serializan de forma distinta De forma predeterminada, todos los campos del modelo de la clase se asignarán a los campos del serializador correspondientes.
    """
    cliente = ClienteReadSerializer()

    class Meta:
        model = Cabecera
        fields = ['id','nro_factura','fecha','cliente','total']

class CabeceraUpdateSerializer(serializers.HyperlinkedModelSerializer):
    """**Clase CabeceraUpdateSerializer**"""
    """Clase para serializar los datos de la tabla Cabecera de la db
    """
    cliente = serializers.PrimaryKeyRelatedField( queryset=Cliente.objects.all(), many=False )
    
    class Meta:
        model = Cabecera
        fields = ['id','nro_factura','fecha','cliente','total']