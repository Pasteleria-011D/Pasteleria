function Carrito({carrito, setCarrito}) {
    return(
        <div className="container mt-4">
            <h1>Carrito</h1>

        {carrito.length === 0 ?(
            <p>El Carrito esta vacio</p>
        ) : (
            carrito.map((producto, index, imagen) => (
                <div key={index} className="card mb-3">
                    <div className="card-body">
                        <h5>{producto.nombre}</h5>
                        <p>${producto.precio}</p>
                            <button className="btn btn-danger" onClick={() => {
                                const nuevoCarrito = carrito.filter((_, i) => i !== index);
                                setCarrito(nuevoCarrito);
                            }}> Eliminar </button>
                    </div>   
                </div>
            ))
        )}
        <p className="cp-bold mt-4">
            Total = ${carrito.reduce((total, producto) => total + producto.precio, 0)}
        </p>
        <button className="btn btn-vacio" onClick={() => setCarrito([])}>Vaciar Carrito</button>
        </div>
    );
}

export default Carrito;