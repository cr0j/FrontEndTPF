from django.template import engines
from django.template import Template

def obtenerTemplate( filepath ):
    """Recibe los componentes de la ruta concatenados; 
       en vistaHtml La open()función devuelve un objeto de 
       archivo que se puede utilizar para leer, escribir y modificar el archivo.
       Si no se encuentra el archivo, genera la FileNotFoundErrorexcepción    
    """

    """con 'r' Abra un archivo para leerlo. (defecto) , La codificación predeterminada 
       de Python es ASCII. 
       Puede cambiarlo fácilmente pasando el encodingparámetro. Read() método devuelve el 
       número especificado de bytes del archivo.
    """
    
    vistaHtml = open(filepath, mode='r', encoding="utf-8")        
    vistaHtmlString = vistaHtml.read()

    vistaHtml.close()

    template = engines['django'].from_string(vistaHtmlString)
    return template