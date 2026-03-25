// useState devuelve dos cosas: el valor actual y una función para cambiarlo
const [carrito, setCarrito] = useState([]);


// Para agregar un plato al carrito (NUNCA mutar el array directamente):
setCarrito([...carrito, { _id: 1, nombrePlato: "Lomo Saltado", precio: 18, cantidad: 2 }]);


// Para quitar un plato:
setCarrito(carrito.filter(item => item._id !== plato._id));
