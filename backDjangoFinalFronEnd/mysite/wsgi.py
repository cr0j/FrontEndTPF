"""
WSGI config for mysite project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings_produccion')#para produccion cambiar esta linea por :
#os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings_produccion')


application = get_wsgi_application()
