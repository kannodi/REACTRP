# Evaluación Pares 

## Ronda 1 — 

**Evaluador:** Joel
**Evaluado:** Paolo
**Escenario elegido:** 
Escenario 3: ¿Cuál es la diferencia entre el Context y un useState normal? ¿Qué problema específico del restaurante resuelve el Context que useState no puede resolver?

**Resumen:**
useState es utilizado para información especifica y momentánea en una ventana, mientras que Context almacena los datos arriba del navegador y reparte entre las ventanas sin reiniciarlos.


**Qué entendió bien:**
El uso de useState como contenedor de ventana local y el uso de Context como contenedor global.
**Qué necesita repasar:**
El uso de Context para manipular la información de los valores.

-----------------------------------

## Ronda 2 — 

**Evaluador:** Paolo
**Evaluado:** Joel
**Escenario elegido:** 
Escenario 1: Traza el flujo completo de lo que pasa cuando el mesero hace clic en '+ Agregar' en una PlatoCard. Desde el clic hasta que el número del badge cambia en pantalla — menciona cada función, cada cambio de estado.


**Resumen:**
Al hacer clic en el botón “+ agregar” lo que ocurre es que los platos son agregados al carrito y dependiendo de la cantidad de clics que hagas estos se sumaran al pedido (Sopa X2. X3, …) y por ende también se incrementará el monto a pagar por la orden.
Para eso se utilizan las funciones AgregarPlato, quitarPlato y limpiarPedido.


**Qué entendió bien:**
Entiende el comportamiento esperado de la aplicación a nivel de usuario, identificó correctamente los nombres de las funciones principales encargadas de la gestión del carrito
**Qué necesita repasar:**
Falto detallar mas el proceso dentro de react



**Escenarios**
Escenario 1: Traza el flujo completo de lo que pasa cuando el mesero hace clic en '+ Agregar' en una PlatoCard. Desde el clic hasta que el número del badge cambia en pantalla — menciona cada función, cada cambio de estado.
Escenario 2: ¿Por qué no se puede hacer pedido.items.push(nuevoItem) directamente? Explica qué es la inmutabilidad en React y por qué importa para que el componente se re-renderice.
Escenario 3: ¿Cuál es la diferencia entre el Context y un useState normal? ¿Qué problema específico del restaurante resuelve el Context que useState no puede resolver?
