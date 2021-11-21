"""**ClienteViewSet** 
"""
"""**La clase View** Esta clase es el núcleo de todo el montaje, 
    y si ninguno de las funcionalidades que nos proporciona Django nos sirve, casi seguro que empezaremos a crear nuestra propia classe extendiendo de ésta.

"""
"""El marco Django REST le permite combinar la lógica para un conjunto de vistas relacionadas en una sola clase, llamada ViewSet. En otros marcos, también puede encontrar implementaciones conceptualmente similares denominadas algo como 'Recursos' o 'Controladores'.Los enrutadores predeterminados incluidos con el marco REST proporcionarán rutas para un conjunto estándar de acciones de estilo de creación / La ViewSetclase hereda de APIView. Puede utilizar cualquiera de los atributos estándar, como permission_classes, authentication_classespara controlar la política de la API en el conjunto de vistas. recuperación / actualización / destrucción
"""
from rest_framework import routers, serializers, viewsets
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework import mixins



import django_filters
from rest_framework import status
from datetime import datetime

from mysite.modelos.cabecera.model import Cabecera
from mysite.modelos.cabecera.serializer import CabeceraReadSerializer, CabeceraUpdateSerializer
"""**Mixins:** Los mixins se utilizan para reutilizar código en componentes de Vue que realizan la misma acción. Los mixins son como funciones en la programación de C. Podemos definir algunas acciones en mixins y usarlo donde sea necesario. La reutilización del código es simple con la ayuda de mixins."""
class CabeceraViewSet(  
    mixins.CreateModelMixin,
    mixins.ListModelMixin,
    mixins.UpdateModelMixin,                    
    mixins.RetrieveModelMixin,
    mixins.DestroyModelMixin,
    viewsets.GenericViewSet                
):
    queryset = Cabecera.objects.all()
    
    read_serializer_class = CabeceraReadSerializer
    update_serializer_class = CabeceraUpdateSerializer

    serializer_class = CabeceraReadSerializer   
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = fields = ['id','nro_factura','fecha','cliente','total']
    
    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        queryset = Cabecera.objects.all()
        startDate = self.request.query_params.get('startdate')
        endDate = self.request.query_params.get('enddate')
        print(startDate,endDate)
        if startDate is not None and endDate is not None:
            #queryset = queryset.filter(fecha__range=["startDate", "endDate"])
            #queryset = queryset.objects.filter(fecha__date__gte=startDate, fecha__date__lte=endDate)
            queryset = Cabecera.objects.all().filter(fecha__range=(startDate, endDate))
            print(queryset)
        return queryset

    def update(self, request, *args, **kwargs ):
        """**Metodo Update**"""
        """Instancia del modelo  en UpdateAPIViw django REST"""
        return super().update(request, args ,kwargs)

    def create(self, request, *args, **kwargs): 

       return super().create(request, args ,kwargs)

                
            
        
    def get_serializer_class(self):
        """**Metodo get_serializer_class**"""
        """Devuelve la clase que se usará para el serializador.Por defecto, usa `self.serializer_class`.Es posible que desee anular esto si necesita proporcionar diferentes serializaciones dependiendo de la solicitud entrante.
        """        
        if self.action in ["create", "update", "partial_update", "destroy"]:
            return self.update_serializer_class
        return self.read_serializer_class



