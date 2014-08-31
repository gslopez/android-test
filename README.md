android-test
============

Hola, este repo tiene una aplicación de prueba para android.

Requisitos:
1.-Eclipse (tambien existe Android Studio, pero yo nunca lo he utilizado)
2.-Android SDK instalado en eclipse
3.-Versión 3.2 de Android instalada

Luego, estamos casi listos para correr la aplicación. Solo falta configurar el emulador de Android, que emulará un dispositivo
que correrá la aplicación. Hay varios tutoriales en internet sobre como configurar esta parte, lo mas importante es que nos fijemos
en la version de android que se utilizará (3.2). Aqui dejo un tutorial:

*Tutorial para crear emulador: http://androideity.com/2011/07/07/crear-una-avd-en-eclipse/

---------------------------
Conocimientos previos:

La aplicación es muy simple, pero tiene varias cosas que son clásicas en cualquier version de android.
Lo primero que debemos entender bien es la estructura de carpetas que android utiliza. 
A continuación dejo dos tutoriales que explican esto y otras cosas sobre Android.

*Curso de sgoliver (con este aprendí yo):
  http://www.sgoliver.net/blog/?page_id=2935
*Curso de aprendeandroid.com (encontre muy bueno este curso, y no es tan largo)
  http://www.aprendeandroid.com/menu.htm

Existen muchos otros por internet, por lo que son libres de aprender con cualquiera.

--------------------
Descripcion de la app:

La aplicación consiste en un boton que tiene mi nombre, y que al ser presionado abre otra ventana que muestra una foto, que yo subí,
y mi nombre nuevamente. Es super simple, pero quiero que se fijen en lo siguiente:

1.-�Como se le asigna mi nombre al botón? ¿Y en todas las partes que sale?
2.-�Como se abre una ventana nueva?
3.-�Como se maneja la distribucion espacial de los elementos?
  *Averiguar sobre LinearLayout y otros layout

--------------------------
Actividad de refuerzo Android y Git

Para confirmar que todo esta funcionando bien, y como desafio para evaluar sus conocimientos en Android, les pido porfavor que hagan
lo siguiente:

Agreguen otro boton con su nombre (abajo del boton Gonzalo Lopez), y que al ser presionado se abra otra ventana que muestre su nombre
y una imagen subida por ustedes, como ocurre al presionar mi boton. Como requisito deben crear otro Activity, no pueden cambiar el
codigo escrito en GonzaloActivity.

Una vez terminado esto, envien un Pull Request al proyecto en github. Con esto estarán solicitando integrar codigo a la aplicacion.
Yo les revisare su codigo, y si todo esta bien lo mergeare con el proyecto principal. Si no, les comentare la parte que esta mal 
para que la arreglen.

Así es como trabajaremos durante el semestre, así que es una buena manera para practicar.

Si tienen cualquier duda, pueden preguntarme a mi por cualquier medio, estaré pendiente.


Saludos y suerte !
