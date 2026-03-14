# Evaluación entre Pares — React Día 1

---

## Ronda 1

**Evaluador:**  Paolo
**Evaluado:**  Joel
**Escenario elegido:** 1

**Resumen de la respuesta:**
Carta toma los datos del array platosMock y los pasa como props a la funcion PlatoCard.

**Qué entendió bien:**
La funcionalidad del array entre platosMock y carta.

**Qué necesita repasar:**
La funcionalidad de key y los identificadores

---

## Ronda 2

**Evaluador:**  Joel
**Evaluado:**  Paolo
**Escenario elegido:** 3

**Resumen de la respuesta:**
- En archivos jsx no se utiliza class al este estar reservado para js, en su lugar se utiliza className.
- En archivos jsx es mas apropiado declarar las condicionales de la siguiente manera {condicional ? "verdadero" : "falso"}

**Qué entendió bien:**
El uso de className y la declaracion de condicionales.

**Qué necesita repasar:**
Repasar sintaxis de JSX.

---

## Escenarios disponibles

**Escenario 1:**
En el Sprint 0 tenían renderMenu() con innerHTML. Hoy construyeron PlatoCard. Si el restaurante tiene 50 platos y cambia el stock de uno solo, ¿qué hace cada solución? ¿Cuántos nodos del DOM toca cada una?

**Escenario 2:**
Muéstrame el componente PlatoCard que construyeron. Explícame qué hace cada línea. Si en alguna línea no puedes explicarla, eso es lo que necesitas repasar.

**Escenario 3:**
Tengo este JSX: <li class="plato">{if(plato.disponible){"✅"}}</li>
Hay dos errores. Encuéntralos, explica por qué cada uno es un error y corrígelos.
