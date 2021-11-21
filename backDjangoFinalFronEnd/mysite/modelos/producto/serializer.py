from rest_framework import routers, serializers, viewsets
from mysite.modelos.producto.model import Producto  


"""La clase HyperlinkedModelSerializer es similar a la clase ModelSerializer excepto que usa hipervínculos para representar relaciones, en lugar de claves primarias. De forma predeterminada, el serializador incluirá un campo de URL en lugar de un campo de clave principal. El campo de URL se representará mediante un campo de serializador HyperlinkedIdentityField, y cualquier relación en el modelo se representará mediante un campo de serializador HyperlinkedRelatedField."""
class ProductoReadSerializer(serializers.HyperlinkedModelSerializer):
    """**Clase ProductoReadSerializer**"""
    """Clase para serializar los datos de la tabla Producto de la db, los campos miembro, us y sprint son instancias en donde se serializan de forma distinta De forma predeterminada, todos los campos del modelo de la clase se asignarán a los campos del serializador correspondientes.
    """

    class Meta:
        model = Producto
        fields = ['id','nombre','precio','existencia']

class ProductoUpdateSerializer(serializers.HyperlinkedModelSerializer):
    """**Clase ProductoUpdateSerializer**"""
    """Clase para serializar los datos de la tabla Producto de la db
    """

    class Meta:
        model = Producto
        fields = ['id','nombre','precio','existencia']