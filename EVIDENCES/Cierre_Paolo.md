# Documento de Cierre — React Día 2
**Nombre:** Paolo
**Fecha:** 17/03/2026

---

## Pregunta 1
¿Qué hace main.jsx exactamente? ¿Qué pasaría si lo borraras del proyecto?

**Respuesta:** Main.jsx se encarga de traer dos importaciones esenciales para el uso de react, declarar en que pagina via ID se mostrara cada pieza de nuestra pagina hecha por react, ademas de ser el puente entre index y la app de react, si no existiera no se mostraria NADA en index.html


---

## Pregunta 2
¿Por qué PlatoCard vive en components/ y Home vive en pages/? ¿Cuál es la diferencia concreta entre los dos?

**Respuesta:** Ademas de que facilita la estructura del proyecto, platocard vive en components ya que es una funcion que se podria mostrar en cualquier pagina/por url, los componentes solo retornan valores, en cambio las pages, se muestran en URL, son paginas distintas


---

## Pregunta 3
En el Día 1 usabas import { platosMock } from "./data/platos.mock.js". ¿Por qué ese import funciona ahora con Vite y no funcionaba con el CDN del Día 1?

**Respuesta:**  Ahora usamos importar ya que estamos simulando el tener instalado react gracias a stackblitz, tenemos que traer los datos de platosmock, para que la funcion dentro de home funcione, en el dia 1 simulamos el tener los datos pero en un mismo archivo html, con ayuda de importacion de label via internet, no podriamos importar algo que no existe afuera ni algo que ya esta dentro


---

## Pregunta 4
hooks/, services/ y context/ están vacías hoy. ¿Qué va a vivir en cada una y desde qué día del proyecto se van a usar?

**Respuesta:** Aun no tengo mucha informacion ni lo hemos aplicado aun, pero gracias a la informacion de internet pude descubrir que dentro de hooks/ ira logica reutilizable, en services ayudara a llamar a la api de node con axios el context ayudara a mostrar datos compartidos entre paginas, segun el documento hooks/DIA5 , services/DIA6 , context/DIA8
