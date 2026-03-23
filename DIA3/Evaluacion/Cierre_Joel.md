# Documento de Cierre — React Día 3
**Nombre:** Joel Santivañez
**Fecha:** 23/03/2026

---

## Pregunta 1
¿Qué diferencia hay entre props y estado? Explícalo con el ejemplo de MesaCard — ¿cuál de sus datos es una prop y cuál podría ser estado en el futuro?

**Respuesta:**
La diferencia entre props y estado es que las props son datos que se pasan de un componente padre a un componente hijo, mientras que el estado es un dato que se puede modificar dentro del componente.
Un prop seria el numero de la mesa, la capacidad y los comensales, y el estado seria el estado 'Libre' de la mesa.

---

## Pregunta 2
¿Por qué las props son de solo lectura dentro del componente hijo? ¿Qué pasaría si MesaCard pudiera modificar la prop estado directamente?

**Respuesta:**
Los props son de solo lectura dentro del componente hijo para garantizar un flujo de datos unidireccional (de padre a hijo). Si el hijo pudiera modificarlas, se rompería la consistencia de la interfaz, dificultando la depuración y violando el principio de "componentes puros".

---

## Pregunta 3
Hoy NavBar muestra "Carta", "Mesas" y "Comandas" como texto. En el Día 7 se convierte en navegación real. ¿Qué tendrás que cambiar en NavBar ese día y qué NO tendrás que tocar?

**Respuesta:**
Lo siguiente en navbar seria agregarle su respectiva direccion para que se pueda navegar entre ellos.

---

## Pregunta 4
En DevTools viste el árbol de componentes. ¿Cómo sabes si un componente recibió las props correctas sin tener que leer el código del padre?

**Respuesta:**
Eso se puede saber mediante el panel de componentes de React DevTools, donde se puede ver el árbol de componentes y las props que recibió cada uno.