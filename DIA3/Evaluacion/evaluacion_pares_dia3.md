# Evaluación entre Pares — React Día 3

---

## Ronda 1

**Evaluador:** Joel
**Evaluado:** Paolo
**Escenario elegido:** (1)

**Resumen de la respuesta:**

**Escenario 1:**
Muéstrame MesaCard en el código. Sin ejecutar nada, dime: ¿qué pasa si el padre pasa estado="cerrada"? ¿Qué mostraría el componente? ¿Cómo lo evitarías con PropTypes?

Si el padre pasa estado="cerrada", el componente mostraría los cambios actuales del padre, ya que el componente recibe la prop estado y la muestra directamente. Para evitarlo, usaría PropTypes para integrar el reglamento de lo que muestra el componente.

**Qué entendió bien:**
Relacion entre prop y estado, y como evitar la desincronizacion de datos.

**Qué necesita repasar:**
El manejo de PropTypes.

---

## Ronda 2

**Evaluador:** Paolo
**Evaluado:** Joel
**Escenario elegido:** (2)

**Resumen de la respuesta:**

**Escenario 2:**
Abre DevTools en la pestaña Components. Selecciona cualquier MesaCard. Explícame qué ves en el panel derecho y qué significa cada campo.



**Qué entendió bien:**


**Qué necesita repasar:**


---

## Escenarios disponibles

**Escenario 1:**
Muéstrame MesaCard en el código. Sin ejecutar nada, dime: ¿qué pasa si el padre pasa estado="cerrada"? ¿Qué mostraría el componente? ¿Cómo lo evitarías con PropTypes?

**Escenario 2:**
Abre DevTools en la pestaña Components. Selecciona cualquier MesaCard. Explícame qué ves en el panel derecho y qué significa cada campo.

**Escenario 3:**
¿Por qué NavBar no necesita el mock de mesas ni el de platos? ¿De dónde vienen sus datos? ¿Qué tipo de componente es NavBar comparado con MesaCard?
