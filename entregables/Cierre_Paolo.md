# Documento de Cierre — 
**Nombre:** Paolo
**Grupo:** SALA5
**Fecha:** 14/04/2026

## Pregunta 1
El PedidoContext tiene la misma forma que el modelo Pedido en NestJS. ¿Por qué crees que se diseñó así? ¿Qué ventaja da cuando llegue el momento de conectar el frontend con la API real?
**Respuesta:**
Se diseño de esa manera para que el frontend y el backend tengan la misma estructura de datos, lo que facilita la comunicación entre ambos cuando tengamos que implementarlos
## Pregunta 2
Describe en tus palabras la diferencia entre createContext, Provider y useContext. ¿Cuándo se usa cada uno? ¿Quién crea el estado, quién lo comparte y quién lo lee?
**Respuesta:**
con create context establecemos el nombre del contexto y value, con provider encerramos la app con el contexto y sus values/funciones, el createcontext se usa al inicio del archivo con el que usara el contexto, esto para declarar nombre del que usara usecontext, el provider se usa en el archivo principal para compartir el contexto a toda la app, y usecontext/la importacion se usa en los archivos que necesitan acceder al contexto. createcontext/crea , provider/lo comparte, usecontext/lo lee en toda la app gracias a su exportacion