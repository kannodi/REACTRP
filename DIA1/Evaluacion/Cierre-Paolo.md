# Documento de Cierre — React Día 1
**Nombre:** Paolo 
**Fecha:** 13/03/2026

---

## Pregunta 1
en el Sprint 0 tenías renderMenu() con innerHTML. Hoy construiste PlatoCard. ¿Qué diferencia concreta hay en cómo cada uno actualiza la pantalla cuando cambia un solo plato? Menciona el Virtual DOM en tu respuesta.

**Respuesta:**
en el sprint 0 al usar innehtml, cuando se cambia un solo plato, se vuelve a renderizar todo el html, por lo que se vuelven a escribir todos los otros platos, en cambio con react se actualiza solo el plato que se modifico gracias al virtual dom que genera y por la key por ID que indica que valores cambiar, ahorrando asi recursos y tiempo.

---

## Pregunta 2
¿Qué es JSX exactamente? ¿Es HTML? ¿Es JavaScript? ¿Qué hace Vite con él antes de que llegue al navegador?

**Respuesta:**
jsx es una extension de javascript que permite escribir html adentro de javascript, no es html ni javascript puro, es una fusion parecida de ambos, vite es lo mismo que hicimos con babel hoy pero instalado localmente y sin depender de internet, hoy lo usamos con url de cdn via internet, para poder usar react

---

## Pregunta 3
PlatoCard recibe los mismos campos que va a devolver GET /api/platos del equipo de Node. ¿Por qué eso importa? ¿Qué van a tener que cambiar en PlatoCard cuando el endpoint esté listo?

**Respuesta:**
Es importante para que el momento de implementar las api, funcione correctamente ya todo unido, asi no se vuelve a modificar codigo, en la funcion carta puede que cambiemos el de donde recibe datos del array a la api, pero no las props que recibe la funcion platocard ya que en carta declaramos a donde enviamos

---

## Pregunta 4
Mañana instalan Vite y crean el proyecto real. ¿Qué problema resuelve Vite que hoy resolvieron con el CDN de React?

**Respuesta:**
Al descargar vite, podremos usar react en todo momento sin necesidad de internet, ya que hoy usamos cdn para poder usar react y esto requiere conexion a internet, adicionalmente, cdn traduce el jsx a javascript una vez la pagina cargada y vite descargado lo hace antes de llegar al navegador