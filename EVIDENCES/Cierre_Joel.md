# Documento de Cierre — React Día 2
**Nombre:** 
**Fecha:** 

---

## Pregunta 1
¿Qué hace main.jsx exactamente? ¿Qué pasaría si lo borraras del proyecto?

**Respuesta:**
El archivo main.jsx se encarga de conectar tu código de React con el mundo real (el navegador). Si lo borras, el proyecto no funcionará.

---

## Pregunta 2
¿Por qué PlatoCard vive en components/ y Home vive en pages/? ¿Cuál es la diferencia concreta entre los dos?

**Respuesta:**
El archivo PlatoCard vive en components/ porque es un componente reutilizable que se encarga de mostrar la información de un plato.
Home, por otro lado, vive en pages/ porque es una página que se encarga de mostrar la información de todos los platos.

---

## Pregunta 3
En el Día 1 usabas 'import { platosMock } from "./data/platos.mock.js"'. ¿Por qué ese import funciona ahora con Vite y no funcionaba con el CDN del Día 1?

**Respuesta:**
El import funciona ahora con Vite porque Vite es un servidor de desarrollo que permite importar archivos locales. El CDN del Día 1 no funcionaba porque el CDN solo permite importar archivos de Internet.

---

## Pregunta 4
hooks/, services/ y context/ están vacías hoy. ¿Qué va a vivir en cada una y desde qué día del proyecto se van a usar?

**Respuesta:**

Hooks: Funciones que usan los hooks nativos de React (useState, useEffect, etc.) para extraer lógica repetitiva de los componentes. Esto se empleara a partir del dia 3 y 4, en donde varios componentes requeriran de la misma logica.

Services: Aquí es donde se van a guardar las funciones que hacen peticiones HTTP a una base de datos o API (como Supabase o Firebase). Esto se empleara a partir del dia 5.

Context: Aquí es donde se van a guardar los datos que se van a compartir entre componentes, como por ejemplo el usuario que se ha logueado. Esto se empleara a partir del dia 6.
