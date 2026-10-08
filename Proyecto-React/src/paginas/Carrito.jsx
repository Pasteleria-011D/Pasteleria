function Carrito({carrito, setCarrito}) {
    const productosAgrupados = carrito.reduce((acumulado, producto) =>{
        const existente = acumulado.find(
            (item) => item.id === producto.id
        );

        if(existente){
            existente.cantidad++;
        }else{
            acumulado.push({...producto, cantidad: 1});
        }
        return acumulado
    }, []);

    return(
        <div className="container mt-4">
            <h1>Carrito</h1>

        {carrito.length === 0 ?(
            <p>El Carrito esta vacio</p>
        ) : (
            productosAgrupados.map((producto) => (
                <div key={producto.id} className="card mb-3">
                    <div className="card-body">
                        <h5>{producto.nombre}</h5>
                        <p>${Number(producto.precio).toLocaleString("es-CL")}</p>
                        <p>Cantidad: {producto.cantidad}</p>
                            <button className="btn btn-danger" onClick={() => {
                                const nuevoCarrito = carrito.filter((item) => item.id !== producto.id);
                                setCarrito(nuevoCarrito);
                            }}> Eliminar </button>
                    </div>   
                </div>
            ))
        )}
        <p className="cp-bold mt-4">
            Total = ${productosAgrupados.reduce(
                (total, producto) =>
                    total + producto.precio * producto.cantidad,0
            ).toLocaleString("es-CL")}
        </p>
        <button className="btn btn-vacio" onClick={() => setCarrito([])}>Vaciar Carrito</button>
        </div>
    );
}

export default Carrito;