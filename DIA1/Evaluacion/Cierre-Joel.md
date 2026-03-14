# Documento de Cierre — React Día 1
**Nombre:**  Joel Santivañez
**Fecha:** 14/03/2026

---

## Pregunta 1
En el Sprint 0 tenías renderMenu() con innerHTML. Hoy construiste PlatoCard. ¿Qué diferencia concreta hay en cómo cada uno actualiza la pantalla cuando cambia un solo plato? Menciona el Virtual DOM en tu respuesta.

**Respuesta:**
Anteriormente se utilizaba innerHTML para actualizar la pantalla, lo cual implicaba un redibujado completo de la pantalla. Ahora se utiliza el Virtual DOM, que permite actualizar solo los elementos que han cambiado, ahorrando recursos y tiempo.

---

## Pregunta 2
¿Qué es JSX exactamente? ¿Es HTML? ¿Es JavaScript? ¿Qué hace Vite con él antes de que llegue al navegador?

**Respuesta:**
jsx es una version de javascript que incluye elementos de html para emplearlos dentro de javascript. En cuanto a Vite, este se encarga de traducir el jsx a javascript antes de que llegue al navegador.


---

## Pregunta 3
PlatoCard recibe los mismos campos que va a devolver GET /api/platos del equipo de Node. ¿Por qué eso importa? ¿Qué van a tener que cambiar en PlatoCard cuando el endpoint esté listo?

**Respuesta:**
Es fundamental porque garantiza la intercambiabilidad entre los datos de prueba y los reales. Cuando el endpoint esté listo no hay necesidad de modificar el codigo de PlatoCard, solo la fuente de datos.

---

## Pregunta 4
Mañana instalan Vite y crean el proyecto real. ¿Qué problema resuelve Vite que hoy resolvieron con el CDN de React?

**Respuesta:**
- Elimina la necesidad de utilizar multiples cdn para diferentes librerias.
- Elimina la necesidad de utilizar varias veces el script de react.
- Elimina la necesidad de usar internet para poder usar react.
