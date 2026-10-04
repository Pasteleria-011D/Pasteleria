function Carrito({carrito}){
    return(
        <div className="container mt-4">
            <h1>Carrito</h1>

        {carrito.legth === 0 ?(
            <p>El Carrito esta vacio</p>
        ) : (
            carrito.map((producto, index, imagen) => (
                <div key={index} className="card mb-3">
                    <div className="card-body">
                        <h5>{producto.nombre}</h5>
                        <p>${producto.precio}</p>
                    </div>   
                </div>
            ))
        )}
        <p className="cp-bold mt-4">
            Total = ${carrito.reduce((total, producto) => total + producto.precio, 0)}
        </p>
        </div>
    );
}

export default Carrito;