// Cargar el menú una sola vez cuando el componente aparece en pantalla:
useEffect(() => {
    const menu = obtenerPlatosMock();   // hoy usamos el mock
    setPlatos(menu);                     // en el Día 6 será Axios
}, []);  // ← el [] es crítico: sin él se ejecutaría infinitamente
