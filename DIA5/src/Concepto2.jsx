// Un ítem del carrito tiene el plato + la cantidad
// { _id: '...', nombre: 'Lomo saltado', precio: 18, cantidad: 2 }


// Para incrementar cantidad de un plato que ya está en el carrito:
setCarrito(carrito.map(item =>
    item._id === plato._id
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
));


// Total del carrito:
const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
