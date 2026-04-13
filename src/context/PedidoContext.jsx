import { createContext, useContext, useState } from 'react';

const PedidoContext = createContext(null);

const estadoInicial = {
    mesaId: null,                  // null = pedido para llevar
    tipo: 'mesa',                  // 'mesa' | 'para_llevar'
    estado: 'pendiente',           // estado actual del pedido
    items: [],                     // [{ platoId, nombre, cantidad, precioUnitario }]
    total: 0,                      // calculado automáticamente
};

export function PedidoProvider({ children }) {
    const [pedido, setPedido] = useState(estadoInicial);

    // Recalcular total cada vez que cambian los items
    const calcularTotal = (items) =>
        items.reduce((acc, item) => acc + item.precioUnitario * item.cantidad, 0);
    // Agregar plato — si ya existe, incrementa cantidad
    const agregarPlato = (plato) => {
        setPedido(prev => {
            const existe = prev.items.find(i => i.platoId === plato._id);
            const nuevosItems = existe
                ? prev.items.map(i =>
                    i.platoId === plato._id
                        ? { ...i, cantidad: i.cantidad + 1 }
                        : i
                )
                : [...prev.items, {
                    platoId: plato._id,
                    nombre: plato.nombre,
                    cantidad: 1,
                    precioUnitario: plato.precio,
                }];
            return { ...prev, items: nuevosItems, total: calcularTotal(nuevosItems) };
        });
    };


    return (
        <PedidoContext.Provider value={{ pedido, agregarPlato, setPedido }}>
            {children}
        </PedidoContext.Provider>
    );
}

export function usePedido() {
    const context = useContext(PedidoContext);
    if (!context) throw new Error('usePedido debe usarse dentro de PedidoProvider');
    return context;
}
