"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from django.urls import path, include # <--
from django.views.generic import TemplateView
from django.contrib.auth.views import LogoutView
from rest_framework import routers, serializers, viewsets


from mysite.api.cliente_viewset import ClienteViewSet
from mysite.api.producto_viewset import ProductoViewSet
from mysite.api.cabecera_viewset import CabeceraViewSet
from mysite.api.detalle_viewset import DetalleViewSet

# API endpoints

router = routers.DefaultRouter()
router.register(r'cliente', ClienteViewSet)
router.register(r'producto', ProductoViewSet)
router.register(r'cabecera', CabeceraViewSet)
router.register(r'detalle', DetalleViewSet)

from . import vistas
urlpatterns = [
    #Rutas de la api
    path('api/',include(router.urls)), #https://www.django-rest-framework.org/tutorial/6-viewsets-and-routers/
    path('admin/', admin.site.urls),
]


