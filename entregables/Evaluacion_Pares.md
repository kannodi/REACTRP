# Evaluación Pares 

## Ronda 1 — 

**Evaluador:** 
**Evaluado:** 
**Escenario elegido:** 

**Resumen:**


**Qué entendió bien:**
**Qué necesita repasar:**

-----------------------------------

## Ronda 2 — 

**Evaluador:** Paolo
**Evaluado:** Joel
**Escenario elegido:** 3

**Resumen:**
Al presionar ambos el boton de seleccionar mesa, ambos pueden seleccionar la mesa, pero el primero en presionar el boton de enviar comanda sera el que se quede con la mesa, el otro mesero no se dara cuenta hasta que actualice la pagina.
El frontend sera el que detecte primero que la mesa ya no esta disponible, ya que al presionar el boton de enviar comanda, se actualizara la lista de mesas y se mostrara que la mesa esta ocupada.

**Qué entendió bien:**
Comprendió perfectamente que cada mesero trabaja con una "copia" local de los datos en su propio navegador y que el conflicto solo surge al intentar sincronizar con la fuente de verdad.
Logró identificar el riesgo de las "race conditions" (condiciones de carrera) entre dos usuarios que intentan usar el mismo recurso (la Mesa 5) simultáneamente.
**Qué necesita repasar:**
Profundizar en la validación del Backend: Es importante recalcar que, técnicamente, el Backend es quien detecta el conflicto primero, no el frontend. El frontend solo recibe el error y lo muestra. El backend es el único que puede garantizar que no se guarden dos pedidos en la misma mesa.

**Escenarios**
Escenario 1: Traza el flujo completo desde que el mesero hace clic en 'Seleccionar mesa' hasta que el pedido aparece en MongoDB. Menciona cada función, cada cambio de estado, cada llamada HTTP.

Escenario 2: El interceptor de Axios agrega el token automáticamente. ¿Qué pasa si el token expiró justo cuando el mesero hace clic en 'Enviar comanda'? ¿Qué ve el mesero? ¿Qué código se ejecuta?

Escenario 3: Dos meseros abren MesasPage al mismo tiempo y ambos ven la Mesa 5 como disponible. Los dos hacen clic en 'Seleccionar'. ¿Qué pasa? ¿Quién lo detecta primero — el frontend o el backend?
