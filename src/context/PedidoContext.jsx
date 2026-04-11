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

    return (
        <PedidoContext.Provider value={{ pedido, setPedido }}>
            {children}
        </PedidoContext.Provider>
    );
}

export function usePedido() {
    const context = useContext(PedidoContext);
    if (!context) throw new Error('usePedido debe usarse dentro de PedidoProvider');
    return context;
}
