# Evaluación Pares 

## Ronda 1 — 

**Evaluador:** Joel
**Evaluado:** Paolo
**Escenario elegido:** 2

**Resumen:**
Escenario 2: El interceptor de Axios agrega el token automáticamente. ¿Qué pasa si el token expiró justo cuando el mesero hace clic en 'Enviar comanda'? ¿Qué ve el mesero? ¿Qué código se ejecuta?
rpta:
Al hacer clic en 'Enviar comanda', el interceptor de petición adjunta el token de localStorage a la cabecera HTTP. Si el token ha expirado, el backend devuelve un error 401 Unauthorized. En ese instante, el mesero verá el estado de 'Enviando...' por una fracción de segundo, pero inmediatamente será redirigido de forma forzosa a la pantalla de Login. El código que lo hace posible es el interceptor de respuesta de Axios en api.js, que al detectar el código 401, ejecuta localStorage.removeItem('token') para limpiar la sesión caducada y activa window.location.href = 'login', provocando un refresco total de la aplicación para proteger el acceso

**Qué entendió bien:**
El ciclo de vida de los interceptores: Tiene muy claro el flujo. Entiende que el interceptor de petición es quien inyecta el token y que el backend responderá con un código 401 Unauthorized si ha expirado.

Gestión de la sesión: Identifica correctamente que el interceptor de respuesta debe capturar ese error 401 y proceder a limpiar el localStorage (removeItem) por seguridad.

Experiencia de usuario (UX): Comprende bien la secuencia de eventos desde la perspectiva del usuario (el breve estado de "Enviando..." antes de la interrupción).

**Qué necesita repasar:**
Navegación en Single Page Applications (SPAs): El uso de window.location.href = 'login' es una mala práctica en entornos como React, ya que fuerza una recarga completa del navegador ("refresco total"). Esto destruye el estado actual de la aplicación y rompe la fluidez de la SPA.

Uso del Router: Necesita repasar cómo implementar redirecciones utilizando la herramienta de enrutamiento del proyecto (como react-router-dom). Lo ideal es manejar la redirección del lado del cliente mediante un history object global o inyectando la función de navegación en el archivo de configuración de Axios.

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
