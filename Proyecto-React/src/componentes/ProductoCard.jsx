import { useState } from "react";
import { Link } from "react-router-dom";

function ProductoCard({id, nombre, precio, imagen, setCarrito}){
    const [agregado, setAgregado] = useState(false);
    return(
        <div className="card">
            <Link to={`/detalleProducto/${id}`}>
                <img src={imagen} className="card-img" alt={nombre}/>
            </Link>

            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">${precio}</p>

                <button className="btn btn-primary"
                onClick={() => {
                    setCarrito((carritoActual) => [...carritoActual, {nombre, precio, imagen}]);
                    setAgregado(true);
                }}>
                    Agregar al Carrito
                </button>
                {agregado && (
                    <p className="text-success">
                        Producto Agregado al Carrito
                    </p>
                )}
            </div>
        </div>
    );
}

export default ProductoCard;