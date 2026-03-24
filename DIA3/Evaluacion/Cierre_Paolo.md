# Documento de Cierre — React Día 3
**Nombre:**Cesar Paolo Lopez
**Fecha:**23/03/2026

---

## Pregunta 1
¿Qué diferencia hay entre props y estado? Explícalo con el ejemplo de MesaCard — ¿cuál de sus datos es una prop y cuál podría ser estado en el futuro?

**Respuesta:**Los props son los datos del padre que se muestran en mesacard dentro del componente, en mesacard tenemos, numero,estado,capacidad y comensales, numero es una prop fija, no cambiara, mesa 1 seria mesa 1 siempre y estado podria ser estado en el futuro, haciendola dinamica, cambiando en la memoria de react

---

## Pregunta 2
¿Por qué las props son de solo lectura dentro del componente hijo? ¿Qué pasaría si MesaCard pudiera modificar la prop estado directamente?

**Respuesta:**Son solo lectura para mostrar los datos del padre, en el hijo, si mesacard pudiera modificar la prop, habria una desincronizacion de datos, ya que solo cambiaria la parte mesacard y dentro de mesas mock seguiria ocupado o disponible, ademas react usa flujo de datos unidireccional, los datos van del padre al hijo, nunca al reves.


---

## Pregunta 3
Hoy NavBar muestra "Carta", "Mesas" y "Comandas" como texto. En el Día 7 se convierte en navegación real. ¿Qué tendrás que cambiar en NavBar ese día y qué NO tendrás que tocar?

**Respuesta:** NavBar ahora nos tendra que redigir por url a las otras paginas mostrando su contenido de cada una, no tocaremos el prop del nombre del resturante, ya que este es fijo.


---

## Pregunta 4
En DevTools viste el árbol de componentes. ¿Cómo sabes si un componente recibió las props correctas sin tener que leer el código del padre?

**Respuesta:** usando la pestaña Components de las react devTools. al seleccionar el componente en el arbol, puedo ver en el panel derecho exactamente que props está recibiendo y sus valores actuales en tiempo real, sin necesidad de revisar el archivo app.jsx o los mocks
