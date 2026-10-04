function ProductoCard({nombre, precio, imagen}){
    return(
        <div className="card">
            <img src={imagen} className="card-img" alt={nombre}/>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">${precio}</p>

                <button className="btn btn-primary">
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
}

export default ProductoCard;